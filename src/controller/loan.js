const bookModel = require('../models/loan')
const MiscHelper = require('../helpers/helpers')

module.exports = {
    getLoans: (req, res) => {
        loanModel.getLoans()
        .then((result) => {
            MiscHelper.response(res, result, 200);
        })
        .catch(err => console.log(err));
    },

    loanDetail: (req, res) => {
        const idLoan = req.params.id_loan
        bookModel.loanDetail(idLoan)
        .then((result) => {
            MiscHelper.response(res, result, 200);
        })
        .catch(err => console.log(err));
    },

    insertLoan: (req, res) => {
        const {id_user, username, address, title} = req.body 
        const data = {
            id_user,
            username,
            address,
            title
        }
        loanModel.insertLoan(data)
        .then((result) => {
          res.send(result);
        })
        .catch(err => console.log(err));
    },
    updateLoan: (req, res) => {
        const idLoan = req.params.id_loan
        const {id_user, username, address, title} = req.body;
        const data = {
            id_user,
            username,
            address,
            title
        }
        loanModel.updateLoan(idLoan, data)
        .then((result) => {
            res.send(result);
          })
        .catch(err => console.log(err));
    },
    deleteLoan: (req, res) => {
        const idLoan = req.params.id_loan
        loanModel.deleteLoan(idLoan)
        .then((result) => {
            MiscHelper.response(res, result, 200);
        })
        .catch(err => console.log(err));
    }
}