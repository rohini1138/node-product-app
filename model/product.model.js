const mongoose = require("mongoose");
var ProductSchema = new mongoose.Schema({
    productName : {
        type : String,
        required : "Required"
    },
    productId : {
        type : String
    },
    productPrice : {
        type : String
    },
    productRating : {
        type : String
    }
});
module.exports = mongoose.model("Product", ProductSchema)