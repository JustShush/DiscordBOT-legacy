const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    hobbies: [String],
    email: {
        type: String,
        required: true,
        lowercase: true
    }
})

module.exports = mongoose.model('User', userSchema, 'User');