const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {type: String},
        image: {type: String},
        price: {type: Number},
        description: {type: String},
        category: {type: String},
        rating: {type: String},
        size: {type: String},
        product_code: {type: String},
        created_at: {type: Date}
    },
    { collection: 'products' },
    {timestamps: true}
)

const model = mongoose.model('Products', ProductSchema)
module.exports =  model;