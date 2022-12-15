const AFKSystem = require('../../Models/AFKSchema');

module.exports = {
    name: 'afk',
    description: 'A multi-guild AFK System',
    permissions: [],
    async execute(client, message, cmd, args, Discord) {

        let reason = args.join(' ');
        const afkUser = await AFKSystem.findOne({
            UserID: message.author.id
        });
        //if (!reason) reason = 'No reason given.';
        if (afkUser) {
            if (reason === '' || reason === 'off') {
                await AFKSystem.findOneAndDelete({
                    UserID: message.author.id
                });
                const {
                    guild
                } = message
                const user = message.member.user
                const member = guild.members.cache.get(user.id)
                member.setNickname(member.displayName - '[AFK] ')
                const welcomeBack = new Discord.MessageEmbed()
                    .setAuthor({
                        name: `Welcome back, ${message.author.username}`,
                        iconURL: message.author.displayAvatarURL()
                    })
                    .setDescription("You are no longer **AFK**")
                    .setColor("RANDOM")
                    .setFooter({
                        text: ":)"
                    })
                    .setTimestamp();
                return message.reply({
                    embeds: [welcomeBack],
                    ephemeral: true
                });
            } else {
                afkUser.Reason = reason;
                await afkUser.save();
            }
        } else {
            let afkUser = new AFKSystem({
                UserID: message.author.id,
                Reason: reason
            });
            const {
                guild
            } = message
            const user = message.member.user
            const member = guild.members.cache.get(user.id)
            member.setNickname('[AFK] ' + member.displayName)
            await afkUser.save();
        }
        if (!reason) {
            reason = 'No reason given.';
            const afkEmbed = new Discord.MessageEmbed()
                .setAuthor({
                    name: `Cya later, ${message.author.username}!`,
                    iconURL: message.author.displayAvatarURL()
                })
                .setDescription(`You are now **AFK**.\nReason: ${reason}`)
                .setColor('RANDOM')
                .setFooter({
                    text: ':)'
                })
                .setTimestamp();

            return message.reply({
                embeds: [afkEmbed],
                ephemeral: true
            });
        } else {
            const afkEmbed = new Discord.MessageEmbed()
                .setAuthor({
                    name: `Cya later, ${message.author.username}!`,
                    iconURL: message.author.displayAvatarURL()
                })
                .setDescription(`You are now **AFK**.\nReason: ${reason}`)
                .setColor('RANDOM')
                .setFooter({
                    text: ':)'
                })
                .setTimestamp();

            return message.reply({
                embeds: [afkEmbed],
                ephemeral: true
            });
        }


    }

}