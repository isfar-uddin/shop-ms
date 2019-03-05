// Load Product Modal
const CategoryModel = require('../models/category.model');
// Messages
const Messages = require('../constants/messages');
//Get all category
const getAllCategory = (req, res) => {
    CategoryModel.find()
    .sort({ date: -1})
    .then(category => res.status(200).json({result:category, success: Messages.message_200}))
    .catch(err => res.status(404).json({error: "Categories "+ Messages.message_404}))
};

//Add products Controller
const addCategory = (req, res) => {
    const newCategory = new CategoryModel({
        GroupName: req.body.group_name,
        Name: req.body.name,
    });
    newCategory.save()
    .then(post => res.status(200).json({success: Messages.message_200}))
    .catch(err=> res.json({
        error: "Product Not Added" 
    }))
};

//Get Product Details Controller
const categoryDetails = (req, res) => {
    CategoryModel.findById(req.params.id)
    .then(product=> res.status(200).json({result:product, success: Messages.message_200}))
    .catch(err=> res.status(404).json({error: "Category "+ Messages.message_404}))
};

//Update CategoryModel
const updateCategory = (req, res) => {
    CategoryModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(category=> {
        if(!category) {
            return res.status(404).json({error: "Category "+ Messages.message_404})
        }
        res.json(category)
    }).catch(err=> {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({error: "Category "+ Messages.message_404})
        }
        return res.status(500).json({
            error: Messages.message_500
        });
    })
};


//Delete CategoryModel
const delateCategory = (req, res) => {
    CategoryModel.findByIdAndRemove(req.params.id)
    .then(category=> {
        if(!category) {
            return res.status(404).json({error: "Category "+ Messages.message_404})
        }
        res.status(200).json({success: Messages.message_200})
    }).catch(err=> {
        if(err.kind === "ObjectId" || err.name=== "NotFound" ) {
            return res.status(404).json({error: "Category "+ Messages.message_404})
        }
        return res.status(500).json({
            error: Messages.message_500
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