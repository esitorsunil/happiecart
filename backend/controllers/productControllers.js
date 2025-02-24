const Product = require("../model/productModel");
const ErrorHandler = require("../utils/errorHandler");
const asyncError = require("../middleware/asyncError");

//get Products - /api/v1/products
exports.getProducts = async(req, res, next) => {
    const products =  await Product.find();
    res.status(200).json({ 
        success: true,
        count: products.length,
        products
    });
};
// create a new product /api/v1/products/new
exports.newProduct = asyncError(async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
        
    })

});

//Get Single Product - /api/v1/products/:id
exports.getSingleProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHandler("Product not found", 404));
        
        
    }
    res.status(200).json({
        success: true,
        product
    });
};

//Update Product - /api/v1/products/:id
exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    res.status(200).json({
        success: true,
        product
    });
};

//delete Product - /api/v1/products/:id
exports.deleteProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success: false,
            message: "Product not found"
        });
    }
    await product.remove();
    res.status(200).json({
        success: true,
        message: "Product deleted successfully"
    });
}