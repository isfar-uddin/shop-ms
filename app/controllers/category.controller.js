// Load Product Modal
const CategoryModel = require('../models/category.model');

//Get all category
const getAllCategory = (req, res) => {
    CategoryModel.find()
    .sort({ date: -1})
    .then(category => res.json(category))
    .catch(err => res.status(404).json({noproductfound: "No Product Found"}))
};

//Get all products Controller
const addCategory = (req, res) => {
    const newCategory = new CategoryModel({
        GroupName: req.body.group_name,
        Name: req.body.name,
    });
    newCategory.save().then(post => res.json(post));
};

//Get Product Details Controller
const categoryDetails = (req, res) => {
    CategoryModel.findById(req.params.id)
    .then(product=> res.json(product))
    .catch(err=> res.status(404).json({err}))
};

//Update CategoryModel
const updateCategory = (req, res) => {
    CategoryModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(category=> {
        if(!category) {
            return res.status(404).json({message: "Category not found with id "+ req.params.id})
        }
        res.json(category)
    }).catch(err=> {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                message: "Category not found with id "+ req.params.id
            })
        }
        return res.status(500).json({
            message: "Error updating category with id " + req.params.id
        });
    })
};


//Delete CategoryModel
const delateCategory = (req, res) => {
    CategoryModel.findByIdAndRemove(req.params.id)
    .then(category=> {
        if(!category) {
            return res.status(404).json({
                message: "Category not found with id " + req.params.id
            })
        }
        res.json({message: "Category deleted successfully!"})
    }).catch(err=> {
        if(err.kind === "ObjectId" || err.name=== "NotFound" ) {
            return res.status(404).json({
                message: "Category not found with id " + req.params.id
            })
        }
        return res.status(500).json({
            message: "Could not delete category with id" + req.params.id
        })
    })
};


module.exports = {
    getAllCategory: getAllCategory,
    addCategory: addCategory,
    categoryDetails: categoryDetails,
    updateCategory: updateCategory,
    delateCategory: delateCategory
};