const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        // type: { type: String, enum: ['course', 'classroom'], required: true },
        // slug: { type: String, required: true },
        // postid: { type: String, required: true },
        title: {type: String},
        date: {type: String},
        image: {type: String},
        message: {type: String},
        created_at: {type: Date}
    },
    { collection: 'posts' },
    {timestamps: true}
)

// PostSchema.index({ slug: 1, postid: 1 }, { unique: true })

const model = mongoose.model('Posts', PostSchema)
module.exports =  model;