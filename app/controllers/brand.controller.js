//Load BrandModel 
const BrandModel = require('../models/brand.model');


//Get all Brand
const getAllBrand = (req, res)=> {
    BrandModel.find()
    .sort({date: -1})
    .then(products=> res.status(200).json(products))
    .catch(err=> res.status(404).json({nobrandfound: "No Brand Found"}))
}

//Post / Create Brand
const createBrand = (req, res)=> {
    const newBrand = new BrandModel({
        Name: req.body.name
    })

    newBrand.save()
    .then(()=> res.status(200).json({message: "success"}))
    .catch(err=> res.status(404).json(err))
}

// Get brand details
const brandDetails = (req, res)=> {
    BrandModel.findById(req.params.id)
    .then(brand=> res.status(200).json(brand))
    .catch(err=> res.status(404).json({nobrandfound: "This brand not found"}))
}


module.exports = {
    getAllBrand: getAllBrand,
    createBrand: createBrand,
    brandDetails: brandDetails
}
