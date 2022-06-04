const mong = require("mongoose");
const express = require('express')

express().use(express.json())

const accountSchema = new mong.Schema({
    email:{
        type:String,
        required:true
    }, 
    balance:{
        type:Number,
        required:true
    }
});

const account = mong.model("account", accountSchema);

module.exports = account;