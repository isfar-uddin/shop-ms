//Load BrandModel 
const BrandModel = require('../models/brand.model');


//Get all Brand
const getAllBrand = (req, res)=>{
    BrandModel.find()
    .sort({date: -1})
    .then(products=> res.status(200).json(products))
    .catch(err=> res.status(404).json({nobrandfound: "No Brand Found"}))
}


module.exports = {
    getAllBrand: getAllBrand
}
