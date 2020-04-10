const express = require('express');
const Router = express.Router();
const userController = require('../controller/user');


Router.get('/', userController.getUsers)
Router.get('/:id_user', userController.userDetail)
// Router.post('/activated', userController.activatedUser)
Router.post('/register', userController.register)
Router.post('/login', userController.login)
Router.delete('/:id_user', userController.deleteUser)
Router.patch('/edit/:id_user', userController.editUser)
// Router.get('/admin', (req, res) => res.send('ini admin'))
// Router.get('/1', (req, res) => res.send('ini user 1'))

module.exports = Router;