const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({

name: {
    type: String,
    required: [true, "Please enter a product name"]
},

qantity: {
    type: String,
    required: true, 
    default: 0
},

price: {
    type: String,
    required: true, 
    default: 0
},

image: {
    type: String,
    required: false,
    },
},

{
    timestamps:true,
}
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

  