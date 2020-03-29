const userModel = require('../models/user')
const MiscHelper = require('../helpers/helpers')
const { genSaltSync, compareSync, hashSync } = require('bcrypt')
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
        const {id_user, email, fullname, password, phone} = req.body
        const data = {
            id_user,
            email,
            fullname,
            password,
            phone,
            status: 1,
        }
        const salt = genSaltSync(10)
        data.password = hashSync(data.password, salt)
        userModel.register(data).then(result => {
            // const data = {
            //     email,
            //     fullname,
            //     password,
            //     phone,
            //     role: 1,
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
            const data = {
                email,
                password
            }
            const results = compareSync(data.password, result.password)
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
          const {email, password, fullname, phone} = req.body
          const data = {
              email,
              fullname,
              password,
              phone,
          }
          const salt = genSaltSync(10)
          data.password = hashSync(data.password, salt)
          userModel.editUser(idUser, data).then(result => {
              const data = {
                  email,
                  fullname,
                  password,
                  phone,
                }
                MiscHelper.response(res, data, 200, 'Update Success!')
            })
                .catch(err => {
                    MiscHelper.response(res, {}, 400, 'An Error Has Occured!')
                })
      }
    }