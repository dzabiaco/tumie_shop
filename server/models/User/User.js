const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        // type: { type: String, enum: ['course', 'classroom'], required: true },
        // slug: { type: String, required: true },
        // postid: { type: String, required: true },
        username: {type: String, required: true},
        password: {type: String, required: true},
        email: {type: String, required: true},
        orders: {type: Array, default: []},
        first_name: {type: String, default: null},
        last_name: {type: String, default:null},
        address: {type: Object, default: {street:null, city: null, zip:null, country: null}},
        mobile: {type: String, default: null},
        created_at: {type: Date}
    },
    { collection: 'users' },
    {timestamps: true}
)

// PostSchema.index({ slug: 1, postid: 1 }, { unique: true })

const model = mongoose.model('Users', UserSchema)
module.exports =  model;