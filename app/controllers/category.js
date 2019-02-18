// Load Product Modal
const Category = require('../models/Category');

//Get all category
const getAllCategory = (req, res) => {
    Category.find()
    .sort({ date: -1})
    .then(category => res.json(category))
    .catch(err => res.status(404).json({noproductfound: "No Product Found"}))
} 

//Get all products Controller
const addCategory = (req, res) => {
    const newCategory = new Category({
        GroupName: req.body.group_name,
        Name: req.body.name,
    });
    newCategory.save().then(post => res.json(post));
}  

module.exports = {
    getAllCategory: getAllCategory,
    addCategory: addCategory
}