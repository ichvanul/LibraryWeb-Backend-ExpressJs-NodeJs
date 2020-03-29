const bookModel = require('../models/book')
const MiscHelper = require('../helpers/helpers')
const connection = require('../configs/db')

module.exports = {
    getData: (req,res)=> {
        const page = req.query.page;
        const search = req.query.search;
        const sort = req.query.sortdesc;
        const sortasc = req.query.sortasc;
        !page
        ? bookModel.getData(search, sort, sortasc)
            .then((result)=> {
                MiscHelper.response(res,result, 200)
            })
            .catch(err => {
                MiscHelper.response(res, {}, 400, err)
            })
        : connection.query("SELECT COUNT(*) as total FROM `book` ", (err, result)=> {
            const total = result[0].total;
            if(page > 0 ) {
                bookModel.getPage(page, total)
                .then((result)=> {
                    MiscHelper.response(res,result, 200)
                })
                .catch((err)=> {
                    MiscHelper.response(res, {}, res.status,err)
                })
            }
        })
    },

    bookDetail: (req, res) => {
        const idBook = req.params.id_book
        bookModel.bookDetail(idBook)
        .then((result) => {
            MiscHelper.response(res, result, 200);
        })
        .catch(err => console.log(err));
    },

    insertBook: (req, res) => {
        const {title, description, status, author, image, category} = req.body 
        const data = {
            title,
            description,
            status,
            author,
            image,
            category,
        }
        bookModel.insertBook(data)
        .then((result) => {
          res.send(result);
        })
        .catch(err => console.log(err));
    },

    updateBook: (req, res) => {
        const idBook = req.params.id_book
        const {title, description, status, author, image, category} = req.body;
        const data = {
            title,
            description,
            status,
            author,
            image,
            category,
        }
        bookModel.updateBook(idBook, data)
        .then((result) => {
            res.send(result);
          })
        .catch(err => console.log(err));
    },

    deleteBook: (req, res) => {
        const idBook = req.params.id_book
        bookModel.deleteBook(idBook)
        .then((result) => {
            res.send(result);
        })
        .catch(err => console.log(err));
    }
}

    // getBooks: (req, res) => {
    //     // let jumlah = 0
    //     // bookModel.getBooks()
    //     //     .then((result) => {
    //     //         jumlah = result.length;
    //     //     })
    //     const search = req.query.search;
        // const sort = req.query.sortdesc;
        // const sortasc = req.query.sortasc;
    //     console.log(req.query)
    //     bookModel.getBooks(search, sort, sortasc)
    //     .then((result) => {
    //         MiscHelper.response(res, result, 200);
    //     })
    //     .catch(err => console.log(err));
    // },

    // getPage: (req, res) => {
    //     const page = req.query.page;
    //     connection.query("SELECT COUNT(*) as total FROM `book` ", (err, result) => {
    //       const total = result[0].total;
    //       if (page > 0) {
    //         bookModel.getPage(page, total)
    //           .then(result => {
    //             MiscHelper.response(res, result, 200);
    //           })
    //           .catch(err => {
    //             MiscHelper.response(res, {}, res.status, err);
    //           });
    //       }
    //     }
    //   );
    // },

        // sortBook : (req,res)=> {
    //     bookModel.sortBook()
    //     .then((result)=> {
    //         res.send(result);
    //     })
    //     .catch((response)=> {
    //         console.log(response);
    //     })
    // },