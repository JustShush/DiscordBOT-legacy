module.exports = {
    name: 'ping',
    permissions: [],
    description: "this is a ping command!",
    async execute(client, message, cmd, args, Discord) { // tenho de tentar passar isto para embed

        const {
            guild,
            channel
        } = message

        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)

        message.channel.send('**The Ping-inator!**\nPinging...').then((msg) => {
            ping = msg.createdTimestamp - message.createdTimestamp;
            const embed = new Discord.MessageEmbed()
                .setColor(`#2C2F33`)
                .setTitle('Bot`s Ping: ')
                .setDescription(
                    'Bots latency: **' + ping + '**ms\nAPIs latency: **' + client.ws.ping + '**ms'
                )
                .setFooter({ text: '', icon_URL: member.user.displayAvatarURL()}) // queria por so a imagem sem nada esqcrito antes
                .setTimestamp()
            message.channel.send({
                embeds: [embed],
            });
            msg.delete();
        });


    }

}