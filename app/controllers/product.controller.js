
// Load ProductController Modal
const ProductController = require('../models/product.model');


//Get all products Controller
const getAllProduct = (req, res) => {
    ProductController.find()
    .sort({ date: -1})
    .then(product => res.json(product))
    .catch(err => res.status(404).json({noproductfound: "No ProductController Found"}))
}

//Post product Controller
const addProduct = (req, res) => {
    const newProduct = new ProductController({
      Name: req.body.name,
      CategoryID: req.body.category_id,
      Brand: req.body.brand,
      Model: req.body.model,
      Year: req.body.year,
      ProductCode: req.body.product_code,
      BarCode: req.body.bar_code,
      SalePrice: req.body.sale_price,
      DealerPrice: req.body.dealer_price,
      CostPrice: req.body.cost_price,
      Type: req.body.type,
      Color: req.body.color,
      MinimumStockToNotify: req.body.minimum_stockTo_notify,
      StartingInventory: req.body.starting_inventory,
      Purchased: req.body.purchased,
      Sold: req.body.sold,
      OnHand: req.body.On_hand,
      IsActive: req.body.active,
      IsRawProduct: req.body.is_raw_product,
    });
    newProduct.save().then(post => res.json(post));
}

//Get ProductController Details Controller
const productDetails = (req, res) => {
    ProductController.findById(req.params.id)
    .then(product=> res.json(product))
    .catch(err=> res.status(404).json({err}))
}

//Update ProductController
const updateProduct = (req, res) => {
    ProductController.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(product=> {
        if(!product) {
            return res.status(404).json({message: "ProductController not found with id "+ req.params.id})
        }
        res.json(product)
    }).catch(err=> {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                message: "ProductController not found with id "+ req.params.id
            })
        }
        return res.status(500).json({
            message: "Error updating product with id " + req.params.id
        });
    })
}


//Delate ProductController
const deleteProduct = (req, res) => {
    ProductController.findByIdAndRemove(req.params.id, (err) => {
        if (err) return res.status(500).json(err);
        res.status(200).json({status: "success"})
    })
}
    
module.exports = {
    getAllProduct: getAllProduct,
    addProduct: addProduct,
    productDetails: productDetails,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct
}



