const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        // type: { type: String, enum: ['course', 'classroom'], required: true },
        // slug: { type: String, required: true },
        // postid: { type: String, required: true },
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

// PostSchema.index({ slug: 1, postid: 1 }, { unique: true })

const model = mongoose.model('Products', ProductSchema)
module.exports =  model;