const express = require('express')
const route = express.Router();
const {check} = require("express-validator")

const userRoutes = require("../controller/users")

route.post("/signup",[
    check('name').not().isEmpty().withMessage("Name is require"),
    check('email').not().isEmpty().withMessage("Email is require"),
    check('password').not().isEmpty().withMessage("Password is require"),
],userRoutes.signup)

module.exports = route;