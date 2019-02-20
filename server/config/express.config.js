const express = require('express'),
    bodyParser = require('body-parser');


//Load Product Route
const Products = require('./../routes/product.route');

//Load Category Route
const Category = require('./../routes/category.route');


const initMiddleware = app => {
    // Body parser middleware
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
};

// Initialize error route
const initErrorRoutes = app => {
    // Assume 'not found' in the error message is a 404.
    app.use((err, req, res, next) => {
        if (err) {
            return res.status(err.status).send(err);
        } else {
            return next(err);
        }
    });

    // Assume 404 since no middleware responded
    app.use((err, req, res, next) => {
        if (!err) return next();
        res.status(404).send('Unknown Error');
    });
};

// Globing routes files
const initServerRoutes = app => {
    //Use Product Routes
    app.use("/products", Products);

    //Use Category Routes
    app.use("/categories", Category);
};


/**
 * Initialize the Express application
 */
module.exports.init = () => {
    let app = express();

    // Initialize middleware
    initMiddleware(app);

    // Initialize routes
    initServerRoutes(app);

    // Initialize error routes
    initErrorRoutes(app);

    return app;
};