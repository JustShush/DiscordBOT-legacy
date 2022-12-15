const channelId = '756620946307285104' // byebye channel
const Schema = require('../../Models/Bye.js')

module.exports = (Discord, client, member) => {

    Schema.findOne({
        Guild: member.guild.id
    }, async (err, data) => {
        if (!data) return;
        let channel = client.channels.cache.get(data.Channel);
        let Msg = data.Msg || ' ';

        let byeEmbed = new Discord.MessageEmbed()
            .setTitle(`${member.user.tag} joined.`)
            .setColor('BLUE')
            .setDescription(Msg)
            .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
            .setFooter({ text: `We are now a server with ${member.guild.memberCount} members!`})

        channel.send({
            content: `<@${member.id}>`,
            embeds: [byeEmbed]
        })

    })

    /*const messageSend = `<@${member.id}> acabou de sair do server :( Esperemos que se tenha divertido!`

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(messageSend);*/

}