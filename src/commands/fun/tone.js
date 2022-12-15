module.exports = {
    name: 'tone',
    permissions: [],
    description: "deixas de ser tone!",
    aliases: [],
    execute(client, message, cmd, args, Discord) {

        /* Isto e para por as cores nos embed */
        const {
            guild,
            channel
        } = message

        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)
        /* Isto e para por as cores nos embed, o codigo esta em baixo disto */

        const nome = '<@443151810836955137>'

        message.delete()
        message.channel.send(`O ${nome} é **TONE**!`).then(msg => {
            setTimeout(function () {
                if (msg) msg.delete()
            }, 4000)
        });

    }

}