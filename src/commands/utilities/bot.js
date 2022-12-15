module.exports = { // i need to make the bot info command in this file, i want bot and botinfo the same commmand
    name: "bot",
    permissions: [],
    description: "this sends help!",
    aliases: ['botinfo'],
    execute(client, message, cmd, args, Discord) {

        const {
            guild,
            channel
        } = message

        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)

        const botEmbed = new Discord.MessageEmbed()
            .setColor(member.displayHexColor || 'RANDOM')
            .setAuthor({ name: 'YourBestBOT', iconURL: 'https://i.imgur.com/GhT4rY2.png', url: 'https://yourbestbot.pt'})
            .setTitle('Thank you for inviting me to your server!')
            .setThumbnail('https://i.imgur.com/GhT4rY2.png') // por a foto do bot aqui depois.
            //.addField('Invitation link:', '[Click here](https://discord.com/oauth2/authorize?client_id=747412110782234654&scope=bot&permissions=2146958847) to invite me to your server :)', )
            .addFields({
                name: 'Invitation link:',
                value: '[Click here](https://discord.com/api/oauth2/authorize?client_id=747412110782234654&permissions=8&scope=bot) to invite me to your server :)',
                inline: true
            })
            .setTimestamp()
            .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL() })

        const row = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                .setLabel('HERE')
                .setStyle('LINK')
                .setEmoji('🤖')
                .setURL('https://discord.com/api/oauth2/authorize?client_id=747412110782234654&permissions=8&scope=bot')
            )

        message.channel.send({
            embeds: [botEmbed],
            components: [row]
        })
    }
}