const { User } = require("../db");
const { z } = require("zod");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken")
const { JWT_SECRET_KEY } = require("../config")
const { authMiddleware } = require("./middleware")

const validatedSchema = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    firstName: z.string(),
    lastName: z.string()
})

//whatever routes are defined in user will go through api/v1/user
router.post("/signup", async(req,res)=>{
    const result = validatedSchema.safeParse(req.body)
    if (!result.success) {
        return res.json({
            msg: "Invalid Inputs"
        })
    }
    const username = req.body.username

    const userExists = await User.findOne({username:username})

    if (userExists) {
        return res.status(411).json("User already exists")
    }

    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        })

        const userId = newUser._id
        const token = jwt.sign({userId}, JWT_SECRET_KEY)
        
        return res.json({
            msg: "Post request successful",
            json: token
        })
    }
    catch(err) {
        console.log(err)
        res.json({
            msg: "User could not be created"
        })
    }
   
})

const signinBody = z.object({
    username: z.string().email(),
    password: z.string().min(6)
})
//we dont use authMiddleware during signin. Only for get requests for different routes after signing in to the page
router.post("/signin", async(req,res) => {
    const result = signinBody.safeParse(req.body)

    if(!result.success){
        return res.status(411).json({
            message: "Email Already taken / Incorrect Inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET_KEY);

        return res.json({
            token: token,
            message: "Successfully signed in"
        })
    }

    res.status(411).json({
        msg: "Error while logging in"
    })
    
})

module.exports = router;