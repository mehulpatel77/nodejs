const mongoose =require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    name:{
        type:String,
    },
    price:{
        type: Number,
    },
    image: {
        type: String,
    },
    asin:{
        type:String,
    },
})

module.exports = mongoose.model('product',ProductSchema);