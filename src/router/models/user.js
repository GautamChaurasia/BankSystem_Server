const jwt = require("jsonwebtoken")
const mong = require("mongoose");
const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

express().use(express.json())

const userSchema = new mong.Schema({
    name:{
        type:String,
        required:true
    }, 
    email:{
        type:String,
        required:true
    }, 
    pwd:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
});

userSchema.methods.genToken = async function() {
    try{
        let token = jwt.sign({email: this.email}, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token})
        await this.save()
        return token
    }catch(e) {
        return "Server Error! Couldn't generate token"
    }
}

const user = mong.model("user", userSchema);

module.exports = user;