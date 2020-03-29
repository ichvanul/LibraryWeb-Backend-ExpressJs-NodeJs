const express = require('express');
const book = require('./book');
const user = require('./user');
const loan = require('./loan');
const Router = express.Router();

Router
    .use('/book', book)
    .use('/user', user)
    .use('/loan', loan)

module.exports = Router;