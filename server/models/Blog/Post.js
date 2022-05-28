const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        title: {type: String},
        date: {type: String},
        image: {type: String},
        message: {type: String},
        created_at: {type: Date}
    },
    { collection: 'posts' },
    {timestamps: true}
)

const model = mongoose.model('Posts', PostSchema)
module.exports =  model;