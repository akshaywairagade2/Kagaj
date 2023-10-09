const bcrypt = require('bcrypt')
const asyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken')
const nodemailer = require("nodemailer");
const Issue = require("../models/issue")


exports.createissue = async (req, res) => {


    const { username, emailId, filename, description } = req.body;
    console.log(username, emailId, filename, description)

    if (!username || !emailId || !filename || !description) {
        return res.status(400).json({ msg: "Please Enter all the Fields" });
    }

    const file = await Issue.findOne({ filename });

    if (file) {
        return res.status(400).send("This issue is already created");
    }

    try {
        const issue = await Issue.create({
            username,
            emailId,
            filename,
            description
        });

        if (issue) {

            return res.status(201).json({
                msg: "Issue Created Successfully",
                Issue: {
                    _id: issue._id,
                    username: issue.username,
                    emailId: issue.emailId,
                    filename: issue.filename,
                    description: issue.description,
                    status: "pending"
                }
            });
        } else {
            return res.status(400).send("Unable to create Issue");
        }

    } catch (error) {
        console.log("error found")
    }

};


exports.AllIssues = async (req, res) => {

    try {
        const issue = await Issue.find({});

        if (issue) {

            return res.status(201).json({
                msg: "Issue fetched Successfully",
                Issue: issue
            });
        } else {
            return res.status(400).send("Unable to Fetch Issues");
        }

    } catch (error) {
        console.log("error found")
    }

};


