// const { model } = require('mongoose')
const bcrypt = require('bcrypt')
const User=require('../models/user')
const jwt=require('jsonwebtoken')
const asyncHandler = require('express-async-handler')




exports.signup = asyncHandler(async(req,res)=>{
    const {firstName, lastName, emailId, password,isAdmin }=req.body;
    const hashPassword= await bcrypt.hash(password,10);
    const _user=await  User.create({ 
        firstName,
        lastName,
        emailId,
        hashPassword,
        isAdmin
        
    });
    let output;
    (async () => {
        output = await _user.save();
    })
    console.log(output);    
        
})


// exports.signup=(async(req,res)=>{
//     const {
//         firstName,
//         lastName,
//         email,
//         password
//     }=req.body;
//     const hashPassword= await bcrypt.hash(password,10);
//     const _user=new User({ 
//         firstName,
//         lastName,
//         email,
//         hashPassword,
//         // username :shortid.generate()
//     });
//     _user.save((error,data)=>{
//         if(error){
//             return res.status(400).json({
//                 message:'Something went wrong'+error
//             });
//         }
//         if (data){
//             return res.status(201).json({
//                 // user:data
//                 message:"User created successfully"
//             });
//         }
//     });
// })

// exports.signup = (req,res) => {

//     User.findOne({email:req.body.email})
//     .exec(async (error,user)=>{
//         if (user) return res.status(400).json({
//             message:'User already registered'
//         });
//         const {
//             firstName,
//             lastName,
//             email,
//             password
//         }=req.body;
//         const hash_password=await bcrypt.hash(password,10);
//         const _user=new User({ 
//             firstName,
//             lastName,
//             email,
//             hash_password,
//             // username :shortid.generate()
//         });
//         _user.save((error,data)=>{
//             if(error){
//                 return res.status(400).json({
//                     message:'Something went wrong'+error
//                 });
//             }
//             if (data){
//                 return res.status(201).json({
//                     // user:data
//                     message:"User created successfully"
//                 });
//             }
//         });
//     });
// }




// // exports.signup=(req,res)=>{
// //     User.findOne({email:req.body.email})
// //     .exec(async(error,user)=>{
// //         if (user) return res.status(400).json({
// //             message:"User Already Registered",
// //         })
// //         const {
// //             firstName,
// //             lastName,
// //             email,
// //             password,
// //         }=req.body;
// //         const hashPassword=await bcrypt.hash(password,10);
// //         const _user=new User({
// //             firstName,
// //             lastName,
// //             email,
// //             hashPassword,
// //         })
// //         _user.save((error,data)=>{
// //             if (error){
// //                 return res.status(400).json({
// //                     message: "Something went wrong"+error,
// //                 });
// //             }
// //             if (data){
// //                 return res.status(201).json({
// //                     message: "User Registered Succesfully",
// //                 });
// //             }
// //         });
//     });
// };