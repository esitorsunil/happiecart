const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"],
        trim: true,
        maxLength: [100, "Product name cannot exceed 100 characters"]
    },
    description: {
        type: String,
        required: [true, "Please enter product description"]
    },
    price: {
        type: Number,
        default: 0.0,
        trim: true
    },
    rating: {
        type: String,
        default: 0
    },
    images: [
        {
            image: {    
                type: String,
                required: true
            },
        }
    ],
    category: {
        type: String,
        required: [true, "Please select category for this product"],
        enum: {
            values:[
            "Electronics",
            "Mobile Phones",
            "Laptops",
            "Accessories",
            "Headphones",
            "Food",
            "Clothes/Shoes",
            "Beauty/Health",
            "Sports",
            "Books",
            "Outdoor",
            "Home"
            ],
            message: "Please select correct category for product"
        }
    },
    seller: {
        type: String,
        required: [true, "Please enter product seller"]
    },
    stock: {
        type: Number,
        required: [true, "Please enter product stock"],
        maxLength: [20, "Product stock cannot exceed 20"],
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                ref: "User",
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

let schema = mongoose.model("Product", productSchema);

module.exports = schema;