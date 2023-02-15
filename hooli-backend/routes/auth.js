const express = require("express");
const { route } = require("./user-routes");
const Router = express.Router();
const mongoose = require("mongoose");
const USER = mongoose.model("USER");
const bcrypt = require("bcrypt");

Router.get("/", (req, res) => {
  res.send("Salam AJK");
});
Router.post("/signup", (req, res) => {
  const { userName, name, email, password } = req.body;
  if (!name || !email || !userName || !password) {
    res.status(422).json({ error: "Please add all the fields" });
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
            res.json({ message: "Registered Successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  );
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
          return res.status(200).json({ message: "Loged in Successfully" });
        } else {
          return res.status(422).json({ error: "Invalid Password" });
        }
      })
      .catch((err) => console.log(err));
  });
});
module.exports = Router;
