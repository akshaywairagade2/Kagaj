// const { model } = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const asyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken')


exports.signup = async (req, res) => {
    const { firstName, lastName, emailId, password, isAdmin } = req.body;

    if (!firstName || !lastName || !emailId || !password) {
        return res.status(400).json({ msg: "Please Enter all the Fields" });
    }

    const userExists = await User.findOne({ emailId });

    if (userExists) {
        return res.status(400).json({ msg: "User already exist" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        firstName,
        lastName,
        emailId,
        hashPassword,
        isAdmin
    });

    if (user) {
        return res.status(201).json({
            msg: "User Created Successfully",
            User: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                emailId: user.emailId,
                isAdmin: user.isAdmin,
                pic: user.pic,
            }
        });
    } else {
        return res.status(400).send("User not found");
    }
};




