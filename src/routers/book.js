const express = require('express');
const Router = express.Router();
const bookController = require('../controller/book');
const multer = require('multer');
const cors = require('cors');
const redisHelper = require('../helpers/redis');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file,cb) {
        cb (null, file.originalname);
    },
})

const upload = multer ({
    storage
})

Router
    // .get('/', bookController.getBooks)
    .get('/',bookController.getData)
    .get('/:id_book', bookController.bookDetail)
    .post('/', upload.single('image'), bookController.insertBook)
    .patch('/:id_book', bookController.updateBook)
    .delete('/:id_book', bookController.deleteBook)
    // .post('/insert', (req, res) => res.send('ini buku 1'))

module.exports = Router;