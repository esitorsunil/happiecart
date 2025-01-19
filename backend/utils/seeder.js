const connectDatabase = require("../config/database");
const products = require("../data/product.json");
const Product = require("../model/productModel");
const dotenv = require("dotenv");

dotenv.config({path:"backend/config/config.env"});
connectDatabase();
const seedProducts = async () => {
    try{
    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("All products are added");
    }catch(error){
        console.log(error.message);
    }
    process.exit();
}

seedProducts();