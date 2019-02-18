// Load Product Modal
const CategoryController = require('../models/category.model');

//Get all category
const getAllCategory = (req, res) => {
    CategoryController.find()
    .sort({ date: -1})
    .then(category => res.json(category))
    .catch(err => res.status(404).json({noproductfound: "No Product Found"}))
} 

//Get all products Controller
const addCategory = (req, res) => {
    const newCategory = new CategoryController({
        GroupName: req.body.group_name,
        Name: req.body.name,
    });
    newCategory.save().then(post => res.json(post));
} 

//Get Product Details Controller
const categoryDetails = (req, res) => {
    CategoryController.findById(req.params.id)
    .then(product=> res.json(product))
    .catch(err=> res.status(404).json({err}))
}

//Update CategoryController
const updateCategory = (req, res) => {
    CategoryController.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(category=> {
        if(!category) {
            return res.status(404).json({message: "CategoryController not found with id "+ req.params.id})
        }
        res.json(category)
    }).catch(err=> {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                message: "CategoryController not found with id "+ req.params.id
            })
        }
        return res.status(500).json({
            message: "Error updating category with id " + req.params.id
        });
    })
}

const delateCategory = (req, res) => {
    CategoryController.findByIdAndRemove(req.params.id)
    .then(category=> {
        if(!category) {
            return res.status(404).json({
                message: "CategoryController not found with id " + req.params.id
            })
        }
        res.json({message: "CategoryController deleted successfully!"})
    }).catch(err=> {
        if(err.kind === "ObjectId" || err.name=== "NotFound" ) {
            return res.status(404).json({
                message: "CategoryController not found with id " + req.params.id
            })
        }
        return res.status(500).json({
            message: "Could not delete category with id" + req.params.id
        })
    })
}


module.exports = {
    getAllCategory: getAllCategory,
    addCategory: addCategory,
    categoryDetails: categoryDetails,
    updateCategory: updateCategory,
    delateCategory: delateCategory
}