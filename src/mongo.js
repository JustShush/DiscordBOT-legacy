const mongoose = require('mongoose');
const { MONGO_URI } = require("../config.json");

module.exports = async () => {

    await mongoose.connect(MONGO_URI, {
        keepAlive: true
    })

}