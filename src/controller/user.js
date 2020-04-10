require('dotenv').config();
const userModel = require('../models/user')
const MiscHelper = require('../helpers/helpers')
const { genSaltSync, compareSync, hashSync } = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
module.exports = {

    getUsers: (req, res) => {
        userModel.getUsers().
        then((result) => {
            MiscHelper.response(res, result, 200)
        })
        .catch(err => {
            MiscHelper.response(res, result)
            console.log(err)
        })
    },

    register: (req, res) => {
        const {email, fullname, password} = req.body
        const data = {
            email,
            fullname,
            password,
            photo: 'https://pbs.twimg.com/profile_images/1089899540558139392/JxJogv9J_400x400.jpg',
            status: 0,
            role_id: 0,
        }
        const salt = genSaltSync(10)
        data.password = hashSync(data.password, salt)
        userModel.register(data).then(result => {
            // const data = {
            //     fullname,
            //     email,
            //     password,
            //     role: 0,
            // }
            MiscHelper.response(res, result, data, 200)
        })
        .catch(err => {
            MiscHelper.response(res, {}, 201, err)
            console.log(err)
        })
    },

    login: (req, res) => {
        const {email, password} = req.body
        const data = {
            email,
            password
        }
        userModel.login(data.email).then(result => {
            // const token = jwt.sign({id:result.id_user, email:result.email}, 'library');           
            const results = compareSync(data.password, result.password)
            // result.token = token;
            if (results) {
                result.password = undefined
                return res.json({
                    success: 1,
                    message: 'Login Success',
                    result
                })
            } else {
                return res.json({
                    success: 0,
                    message: 'Invalid Password!'
                })
            }
        })
        .catch(err => {
            return res.json({
                success: 0, 
                message: 'Invalid Email. Please Register!'
            })    
        })
    },

    userDetail: (req, res) => {
        const idUser = req.params.id_user
        userModel.userDetail(idUser)
        .then((result) => {
            if (result.length <= 0) {
                MiscHelper.response(res, {}, 400, 'User Not Found!')
            } else {
                MiscHelper.response(res, result, 200, 'Success')
            }
        })
        .catch(err => console.log(err));
    },

    deleteUser: (req, res) => {
        const idUser = req.params.id_user
        userModel.deleteUser(idUser)
        .then((result) => {
            if (result.length <= 0) {
                MiscHelper.response(res, {}, 400, 'User Not Found!')
            } else {
                userModel.deleteUser(idUser)
                    .then((result) => {
                    MiscHelper.response(res, result, 200, 'Deleting Success!')
                }) 
            }
        })
        .catch(err => console.log(err));
    },

    editUser: (req, res) => {
        const idUser = req.params.id_user
        const {email, password, fullname} = req.body
        const data = {
            email,
            fullname,
            password,
        }
        const salt = genSaltSync(10)
        data.password = hashSync(data.password, salt)
        userModel.editUser(idUser, data).then(result => {
            MiscHelper.response(res, data, 200, 'Update Success!')
            })
        .catch(err => {
            MiscHelper.response(res, {}, 400, 'An Error Has Occured!')
            })
        },
    
    // activatedUser: (req, res) => {
    //     const tokenactivation = req.headers['x-token'];
    //     const tokenactive = jwt.verify(tokenactivation, 'library');
    //     const transporter = nodemailer.createTransport({
    //         service: 'gmail',
    //         auth: {
    //             user: 'ivan.putra.13.13.13@gmail.com',
    //             pass: 'cr0nald07'
    //         }
    //     });
    //     const optionMail = {
    //         from: 'ivan.putra.13.13.13@gmail.com',
    //         to: tokenactive.email,
    //         subject: 'Link to activate',
    //         text: 'I love you'
    //     };
    //     transporter.sendMail(optionMail, (err, info) => {
    //         if (err) {
    //             console.log(err)
    //             res.send('email activation failed')
    //         } else {
    //             const result = {
    //                 token: tokenactivation,
    //                 status: 'success'
    //             };
    //             MiscHelper.response(res, result, 200);
    //         }
    //     });
        // const result = {
        //     token: tokenactivation,
        //     email: process.env.EMAIL,
        //     status: 'success'
        // };
        // MiscHelper.response(res, result, 200);
    // },
}