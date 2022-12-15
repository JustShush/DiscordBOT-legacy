const channelId = '722531728421421119' // welcome channel
const rulesID = '722524614768590889' // Rules channel
const Schema = require('../../Models/Welcome.js')

module.exports = (Discord, client, member, message) => { // tenho de tentar por aquilo do moderated nickname 
    Schema.findOne({
        Guild: member.guild.id
    }, async (err, data) => {
        if (!data) return;
        let channel = client.channels.cache.get(data.Channel);
        let Msg = data.Msg || ' ';

        let welEmbed = new Discord.MessageEmbed()
            .setTitle(`${member.user.tag} joined.`)
            .setColor('BLUE')
            .setDescription(Msg)
            .setThumbnail(member.user.displayAvatarURL({
                dynamic: true
            }))
            .setFooter({ text: `We are now a server with ${member.guild.memberCount} members \<3`})

        channel.send({
            content: `<@${member.id}>`,
            embeds: [welEmbed]
        })


    })

    /*let role = member.guild.roles.cache.get('702578612427292762')
    member.roles.add(role);

    const messageSend = `Please welcome <@${member.id}> to the server! Please check out <#${rulesID}>`

    const channel = member.guild.channels.cache.get(channelId)
    channel.send(messageSend)*/

}