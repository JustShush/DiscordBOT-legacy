const flags = {
    DISCORD_EMPLOYEE: 'Discord Employee',
    DISCORD_PARTNER: 'Discord Partner',
    BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
    BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
    HYPESQUAD_EVENTS: 'HypeSquad Events',
    HOUSE_BRAVERY: 'House of Bravery',
    HOUSE_BRILLIANCE: 'House of Brilliance',
    HOUSE_BALANCE: 'House of Balance',
    EARLY_SUPPORTER: 'Early Supporter',
    TEAM_USER: 'Team User',
    SYSTEM: 'System',
    VERIFIED_BOT: 'Verified Bot',
    VERIFIED_DEVELOPER: 'Verified Bot Developer'
};

module.exports = {
    name: 'userinfo',
    permissions: [],
    description: "this gives userinfo!",
    aliases: ["ui", 'ui_info', 'userinfo_info'],
    execute(client, message, cmd, args, Discord) {

        if (cmd === 'ui_info' || cmd === 'userinfo_info') {
            
            const infoEmbed = new Discord.MessageEmbed()
                .setColor('#7e11dd')
                .setTitle(`**${cmd}**`)
                .setDescription('Do: `+userinfo_info`')
                .setTimestamp()
            message.reply({ embeds: [infoEmbed], ephemeral: true})

        } else {

            const {
                guild,
                channel
            } = message
    
            const user = message.mentions.users.first() || message.member.user
            const member = guild.members.cache.get(user.id)
            const userFlags = member.user.flags.toArray();
            const roles = member.roles.cache
            .filter((roles) => roles.id !== message.guild.id)
            .map((role) => role.toString())
            /*const roles = member.roles.cache
                .sort((a, b) => b.position - a.position)
                .map(role => role.toString())
                .slice(0, -1);
                */
    
            const userinfoEmbed = new Discord.MessageEmbed()
                .setAuthor({name: `User info for ${user.username}`, irconURL: user.displayAvatarURL()})
                .setThumbnail(member.user.displayAvatarURL({
                    dynamic: true,
                    size: 512
                }))
                .setColor(member.displayHexColor || 'RANDOM')
                .addField('User', `**❯ User ID:** ${user.id}\n**❯ Flags:** ${userFlags.lengt ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}\n**❯ Avatar:** [Link to avatar](${member.user.displayAvatarURL({ dynamic: true })})\n**❯ Joined Discord:** ` + new Date(user.createdTimestamp).toLocaleDateString() + `\n**❯ Status:** ${member.presence.status}\n \u200b`)
    
                .addField('Member', `**❯ Joined the server:** ` + new Date(member.joinedTimestamp).toLocaleDateString() + `\n**❯ Highest role:** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}\n**❯ Hoist Role:** ${member.roles.hoist ? member.roles.hoist.name : 'None'}\n**❯ Roles [${roles.length}]:** ${member.roles.cache.map(r => r).join(", ").replace("@everyone", " ")}\n \u200b`)
                .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL() })
                .setTimestamp();
            return message.channel.send({
                embeds: [userinfoEmbed]
            });

        }
    }
}