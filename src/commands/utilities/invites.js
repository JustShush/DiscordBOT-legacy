module.exports = {
    name: "invites",
    permissions: [],
    description: "this sends all the invites someone has.",
    aliases: ["inv", 'invite', 'inv_info', 'invites_info', 'invite_info'],
    async execute(client, message, cmd, args, Discord, member) {

        if (cmd === 'inv_info' || cmd === 'invites_info' || cmd === 'invite_info') {

            const infoEmbed = new Discord.MessageEmbed()
                .setColor('#7e11dd')
                .setTitle(`**${cmd}**`)
                .setDescription('Do: `+invites_info`')
                .setTimestamp()
            message.reply({
                embeds: [infoEmbed],
                ephemeral: true
            })

        } else {

            let user =
                message.mentions.members.first() ||
                message.guild.members.cache.find(
                    r =>
                    r.user.username.toLowerCase() === args.join(" ").toLocaleLowerCase()
                ) ||
                message.guild.members.cache.find(
                    r => r.displayName.toLowerCase() === args.join(" ").toLocaleLowerCase()
                ) ||
                message.member;

            let invites = await message.guild.invites.fetch();
            if (invites.length == 0) return message.reply('You have 0 invites.');
            let invCount = 0;
            let inviteCodes = [];
            invites.filter(invite => invite.inviter && invite.inviter.id == user.user.id).forEach(invite => {
                if (invite && invite.inviter) {
                    invCount += parseInt(invite.uses);
                    inviteCodes.push(invite.code);
                }
            });
            // I wanted to give a role when someone has a specific number of invites and be able to do that in different servers
            if (invites.length === 1) {
                let role = member.guild.roles.get('949486108813697064')
                member.roles.add(role);
                console.log('teste')
            }
            if (invites.length === 5) {
                let starterRole = member.guild.roles.get('949488179751321640')
                member.roles.add(starterRole);
                console.log('teste22')
            }

            let invEmbed = new Discord.MessageEmbed()
                .setAuthor({ name: `Invites of ${user.user.username}`, iconURL: user.user.avatarURL})
                .setTimestamp()
                .setDescription(`${user.user} has **${invCount}** Invites.`)
                .addField(`Codes`, inviteCodes.length > 0 ? inviteCodes.slice(0, 30).map(x => `\`${x}\``).join(", ") : "None.")
                .setColor("RANDOM")
                .setFooter({ text: `Requested by ` + message.author.username});

            message.channel.send({
                embeds: [invEmbed]
            });

        }

    }
}