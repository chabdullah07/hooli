const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../keys");
const mongoose = require("mongoose");
const USER = mongoose.model("USER");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "You Must have logged in 1" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, jwt_secret, (err, user) => {
    if (err) {
      return res.status(401).json({ error: "You Must have logged in 2" });
    }
    req.user = user;
    next();
  });
};
