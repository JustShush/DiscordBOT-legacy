const {
    Message
} = require("discord.js");
const DB = require('src/Models/AFKSchema.js');

module.exports = {
    name: 'messageCreate',
    async execute(message) { // when I tag someone it doesn't respond

        if (message.author.bot) return;
        let user = message.author.id
        if (message.mentions.members.first()) {
            const afkUser = await DB.findOne({
                UserID: user.id
            });
    
            if (afkUser) {
                if (afkUser.Reason === undefined) afkUser.Reason = '';
                const afkEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${user.username} is AFK`, user.displayAvatarURL())
                    .setDescription(afkUser.Reason)
                    .setFooter(':)')
                    .setColor("RANDOM")
                    .setTimestamp();
    
                let msg = await message.reply({
                    emebds: [afkEmbed],
                    ephemeral: true
                });
                msg.delete({
                    timeout: 5000
                });
            }
        }


    }

}