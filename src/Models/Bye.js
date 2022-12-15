const mongoose = require('mongoose');

const byeSchema = new mongoose.Schema({
    Guild: String,
    Channel: String,
    Msg: String,
})

module.exports = mongoose.model('Bye', byeSchema, 'Bye');