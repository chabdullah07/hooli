const {validationResult} = require('express-validator')
const signup = (req, res ,next) => {

    const error = validationResult(req)
    if(!error.isEmpty()){
        res.status(400).json({message:"signup failed",errors:error.array()})    
    }
    let {name, email,password} = req.body;

    let user= {name,email,password}

    res.status(200).json({message:"signup success",user:user})


    // res.status(200).json({message:"signup success"})
}

exports.signup = signup;