module.exports = {
    name: 'nomes',
    permissions: [],
    description: "sends yomama jokes",
    aliases: [],
    execute(client, message, cmd, args, Discord) {

        /* Isto e para por as cores nos embed */
        const {
            guild,
            channel
        } = message

        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)
        /* Isto e para por as cores nos embed, o codigo estam em baixo disto */

        const facts = ['Volin Habbah', 'Kevin Mamar', 'Sophin Zannal', 'Yasmin Asbola', 'Ben Gamolli', 'Kelly Linguiça', 'Mohamed Jalin-Habei', 'Geralda Rabo', 'Juan Ballan Sarrola', 'Botelho Pinto', 'Paula Dentro', 'Deide Costa', 'Seoku Myadora'];
        const fact = Math.floor(Math.random() * facts.length);

        const result = facts[fact];

        const yomamaEmbed = new Discord.MessageEmbed()
            .setColor(member.displayHexColor || 'RANDOM')
            .setTitle('Nomes **SUPER NORMAIS**: \n')
            .setDescription(result)

        //message.delete()
        message.channel.send({
            embeds: [yomamaEmbed]
        });

    }

}