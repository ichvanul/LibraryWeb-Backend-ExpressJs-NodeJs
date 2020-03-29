const express = require('express');
const Router = express.Router();
const loanController = require('../controller/loan');

Router
    .get('/', loanController.getLoans)
    .get('/:id_loan', loanController.loanDetail)
    .post('/', loanController.insertLoan)
    .patch('/:id_loan', loanController.updateLoan)
    .delete('/:id_loan', loanController.deleteLoan)

module.exports = Router;