const categoryModel = require('../models/category');
const MiscHelper = require('../helpers/helpers');


module.exports = {
    getCategory: (req, res) => {
        categoryModel.getCategory()
            .then((result) => {
                MiscHelper.response(res, result, 200);
            })
            .catch(err => console.log(err));
    },
    categoryDetail: (req, res) => {
        const idCategory = req.params.id_category
        categoryModel.categoryDetail(idCategory)
            .then((result) => {
                MiscHelper.response(res, result, 200);
            })
            .catch(err => console.log(err));
    },
    insertCategory: (req, res) => {
        const {id, id_category} = req.body
        const data = {
            id,
            id_category
        }
        categoryModel.insertCategory(data)
            .then((result) => {
                res.send(result);
            })
            .catch(err => console.log(err));
    },
    updateCategory: (req, res) => {
        const idCategory = req.params.id_category
        const {id, id_category} = req.body
        const data = {
            id,
            id_category
        }
        categoryModel.updateCategory(idCategory, data)
            .then((result) => {
                res.send(result);
            })
            .catch(err => console.log(err));
    },
    deleteCategory: (req, res) => {
        const idCategory = req.params.id_category
        categoryModel.deleteCategory(idCategory)
            .then((result) => {
                res.send(result);
            })
            .catch(err => console.log(err));
    }
}