const mongoose = require('mongoose');

module.exports = mongoose.model("SuggestSystem", new mongoose.Schema({
    GuildID: String,
    ChannelID: String,
    Message: String
}), "SuggestSystem");