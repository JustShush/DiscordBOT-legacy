//const Discord = require('discord.js')

module.exports = {
    name: 'slow',
    permissions: ["MANAGE_CHANNELS"],
    description: "muda o slowmode",
    aliases: ["s"],
    execute(client, message, cmd, Discord) {

        const messageArray = message.content.split(' ');
        const args = messageArray.slice(1);

        if(!args[0]) {
            message.channel.setRateLimitPerUser(0);
            return message.reply(`The slowmode has been removed!`)
        }

        if(isNaN(args[0])) return message.reply(`This is not a valid time!`);

        message.channel.setRateLimitPerUser(args[0])
        message.reply(`The slowmode has been set to ${args[0]}s`)

    }
}