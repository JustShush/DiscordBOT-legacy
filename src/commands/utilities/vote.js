module.exports = {
    name: 'vote',
    permissions: [],
    description: "sends a link for people to vote",
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#7e11dd')
            .setTitle('Vote for WEBEX mas aqui :)')
            .setURL('https://top.gg/servers/702545447750860931')
            .setThumbnail('https://cdn.discordapp.com/attachments/704028617595682876/1003016058652868688/WEBEX.PNG')
            .addFields({
                name: 'Podes votar aqui:',
                value: 'https://top.gg/servers/702545447750860931/vote',
                inline: true
            }, {
                name: '\u200B',
                value: '\u200B',
                inline: true
            }, )
            .setTimestamp()
            .setFooter({ text: message.guild.name})
        // apaga a mensagem
        message.delete()
        message.channel.send({ embeds: [newEmbed] });
    }

}