const express = require("express");
const { route } = require("./user-routes");
const Router = express.Router();
const mongoose = require("mongoose");
const USER = mongoose.model("USER");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwt_secret = require("../keys");
const requireLogin = require("../middlewares/requireLogin");
const POST = mongoose.model("POST");

Router.get("/", (req, res) => {
  res.send("Salam AJK");
});
Router.post("/signup", (req, res) => {
  const { userName, name, email, password } = req.body;
  if (!name || !email || !userName || !password) {
    res.status(422).json({ error: "Pleasr add all the fields" });
  }
  USER.findOne({ $or: [{ email: email }, { userName: userName }] }).then(
    (savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "User already exist with that Username or email" });
      }
      bcrypt.hash(password, 15).then((hashedpassword) => {
        const user = new USER({
          name,
          userName,
          email,
          password: hashedpassword,
        });
        user
          .save()
          .then((user) => {
            res.status(200).json({ message: "Registered Successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  );
});

Router.get("/createPost", requireLogin, (req, res) => {
  const userId = req.user.id;
  const { imageUrl, content } = req.body;
  if (!imageUrl || !content) {
    return res.status(422).json({ error: "One or more field(s) are missing" });
  }
  const post = new POST({
    userId: userId,
    content: content,
    image: imageUrl,
  });
  post
    .save()
    .then((res) => {
      res.status(200).json({ message: "Post created Successfully" });
    })
    .catch((err) => {
      res.status(500).json({ error: "Something went wrong" });
    });
});

Router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .json({ error: "Please enter Email / Username and Password" });
  }
  USER.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "Invalid Email" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((match) => {
        if (match) {
          let key = jwt_secret.jwt_secret;
          const token = jwt.sign({ user: savedUser }, key);
          return res
            .status(200)
            .json({ message: "Logged in Successfully", token: token });
        } else {
          return res.status(422).json({ error: "Invalid Password" });
        }
      })
      .catch((err) => console.log(err));
  });
});
module.exports = Router;
