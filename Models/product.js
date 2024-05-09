const mongoose =require('mongoose')

const productSchema = mongoose.Schema({
    name: String,
    detail:{
        type: String
    },
    price:{
        type: Number
    },amount:{
        type:Number
    }

},{timestamps: true})
module.exports = mongoose.model('products',productSchema)