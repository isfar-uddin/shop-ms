//Load BrandModel 
const BrandModel = require('../models/brand.model');
// Messages
const Messages = require('../constants/messages');


//Get all Brand
const getAllBrand = (req, res)=> {
    BrandModel.find()
    .sort({date: -1})
    .then(products=> res.status(200).json({result:products, success: Messages.message_200}))
    .catch(err=> res.status(404).json({error: "Brands "+ Messages.message_404}))
}

//Post / Create Brand
const createBrand = (req, res)=> {
    const newBrand = new BrandModel({
        Name: req.body.name
    })

    newBrand.save()
    .then(()=> res.status(200).json({success: Messages.message_200}))
    .catch(err=> res.status(404).json({error: "Brand not Added"}))
}

// Get brand details
const brandDetails = (req, res)=> {
    BrandModel.findById(req.params.id)
    .then(brand=> res.status(200).json({result:brand, success: Messages.message_200}))
    .catch(err=> res.status(404).json({error: "Brand "+ Messages.message_404}))
}

// Edit brand
const editBrand = (req, res)=> {
    BrandModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    
    .then(brand=> {
        if(!brand){
            return res.status(404).json({error: "Brand "+ Messages.message_404})
        }
    }).catch(err=>{
        if(err.kind === "ObjectId") {
            return res.status(404).json({error: "Brand "+ Messages.message_404})
        }
        return res.status(500).json({
            error: Messages.message_500
        })
    })
    .then(brand=> res.status(200).json({result: brand, success: Messages.message_200}))
    .catch(err=> res.status(404).json({error: "Brand "+ Messages.message_404}))
}


//Delete brand
const deleteBrand = (req, res)=> {
    BrandModel.findByIdAndDelete(req.params.id)
    .then(brand=>{
        if(!brand){
            return res.status(404).json({error: "Brand "+ Messages.message_404})
        }
        res.json({message: "Brand deleted successfully!"})
    })
    .catch(err=>{
        if(err.kind === "ObjectId" || err.name=== "NotFound" ) {
            return res.status(404).json({error: "Brand "+ Messages.message_404})
        }
        return res.status(500).json({
            error: Messages.message_500
        })
    })
}


module.exports = {
    getAllBrand: getAllBrand,
    createBrand: createBrand,
    brandDetails: brandDetails,
    editBrand: editBrand,
    deleteBrand: deleteBrand
}
