const mongoose = require('mongoose');

module.exports = mongoose.model("AFKSystem", new mongoose.Schema({
    GuildID: String,
    UserID: String,
    Reason: String,
    Time: String,
}), "AFKSystem");