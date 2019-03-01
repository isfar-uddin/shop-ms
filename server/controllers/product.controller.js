
// Load ProductModel Modal
const ProductModel = require('../models/product.model');

// Messages
const Messages = require('../constants/messages');

//Get all products Controller
const getAllProduct = (req, res) => {
    ProductModel.find()
    .sort({ date: -1})
    .then(product => res.status(200).json({result: product, message: Messages.message_200}))
    .catch(err => res.status(404).json({error: "Product "+ Messages.message_404}))
};

//Post product Controller
const addProduct = (req, res) => {
    const newProduct = new ProductModel({
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
    newProduct.save().then(post => res.status(200).json({result: post, message: Messages.message_200})).catch(err=> res.status(404).json({error: "Product not Added"}))
};

//Get ProductModel Details Controller
const productDetails = (req, res) => {
    ProductModel.findById(req.params.id)
    .then(product=> res.status(200).json({result: product, message: Messages.message_200}))
    .catch(err=> res.status(404).json({error: Messages.message_404, }))
};

//Update ProductModel
const updateProduct = (req, res) => {
    ProductModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(product=> {
        if(!product) {
            return res.status(404).json({error: Messages.message_404})
        }
        res.json(product)
    }).catch(err=> {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                error: Messages.message_404
            })
        }
        return res.status(500).json({
            error: Messages.message_500
        });
    })
};


//Delete ProductModel
const deleteProduct = (req, res) => {
    ProductModel.findByIdAndRemove(req.params.id, (err) => {
        if (err) return res.status(500).json({error: Messages.message_500});
        res.status(200).json({result: Messages.message_200})
    })
};
    
module.exports = {
    getAllProduct: getAllProduct,
    addProduct: addProduct,
    productDetails: productDetails,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct
};



