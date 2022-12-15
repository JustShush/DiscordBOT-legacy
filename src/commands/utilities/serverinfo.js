const filterLevels = {
    DISABLED: 'Off',
    MEMBERS_WITHOUT_ROLES: 'No Role',
    ALL_MEMBERS: 'Everyone'
};
const verificationLevels = {
    NONE: 'None',
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: '(╯°□°）╯︵ ┻━┻',
    VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};
const regions = {
    brazil: 'Brazil',
    europe: 'Europe',
    hongkong: 'Hong Kong',
    india: 'India',
    japan: 'Japan',
    russia: 'Russia',
    singapore: 'Singapore',
    southafrica: 'South Africa',
    sydney: 'Sydney',
    'us-central': 'US Central',
    'us-east': 'US East',
    'us-west': 'US West',
    'us-south': 'US South'
};

module.exports = {
    name: 'serverinfo',
    permissions: [],
    description: "this sends gives userinfo!",
    aliases: ["si", "guild", "server"],
    execute(client, message, cmd, args, Discord) {

        const {
            guild,
            channel
        } = message

        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;

        const serverinfoEmbed = new Discord.MessageEmbed()
            .setDescription(`**Guild information for __${message.guild.name}__**`)
            .setColor('RANDOM')
            .setThumbnail(message.guild.iconURL({
                dynamic: true,
                size: 512
            }))
            .addField('General', `**❯ Name:** ${message.guild.name}\n**❯ ID:** ${message.guild.id}\n**❯ Owner:**  (${message.guild.ownerId})\n**❯ Region:** ${regions[message.guild.region]}\n**❯ Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}\n**❯ Explicit Filter:** ${filterLevels[message.guild.explicitContentFilter]}\n**❯ Verification Level:** ${verificationLevels[message.guild.verificationLevel]}\n**❯ Time Created:** ` + new Date(message.guild.joinedTimestamp).toLocaleDateString() + '\n \u200b')

            .addField('Statistics', `**❯ Role Count:** ${roles.length}\n**❯ Emoji Count:** ${emojis.size}\n**❯ Regular Emoji:** ${emojis.filter(emoji => !emoji.animated).size}\n**❯ Animated Emoji:** ${emojis.filter(emoji => emoji.animated).size}\n**❯ Member Count:** ${message.guild.memberCount}\n**❯ Humans:** ${members.filter(member => !member.user.bot).size}\n**❯ Bots:** ${members.filter(member => member.user.bot).size}\n**❯ Text Channels:** ${channels.filter(channel => channel.type === 'text').size}\n**❯ Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}\n**❯ Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}\n \u200b`)

            .addField('Presence', `**❯ Online:** ${members.filter(member => member.presence === 'online').size}\n**❯ Idle:** ${members.filter(member => member.presence === 'idle').size}\n**❯ Do Not Disturb:** ${members.filter(member => member.presence === 'dnd').size}\n**❯ Offline:** ${members.filter(member => member.presence === 'offline').size}\n \u200b`)

            //.addField(`Roles [${roles.length - 1}]`, roles.length < 10 ? roles.join(', ') : roles.length > 10 ? client.utils.trimArray(roles) : 'None' + '\n \u200b')
            //.addField('Roles', `**❯ Roles [${message.guild.roles.cache.size}]:** ${member.roles.cache.map(r => r).join(", ").replace("@everyone", " ")}\n \u200b`)
            .addField(`Roles [${roles.length - 1}]`, `${roles.length < 50 ? roles.join(', ').replace("@everyone", " ") : roles.length > 50 ? client.trimArray(roles) : 'None'}` )
            .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL() })
            .setTimestamp();
        return message.channel.send({
            embeds: [serverinfoEmbed]
        });
    }
}