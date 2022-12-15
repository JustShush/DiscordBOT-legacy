const mongoose = require('mongoose');

const welcomeSchema = new mongoose.Schema({
    Guild: String,
    Channel: String,
    Msg: String,
})

module.exports = mongoose.model('Welcome', welcomeSchema, 'Welcome');