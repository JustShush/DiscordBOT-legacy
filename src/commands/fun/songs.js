module.exports = {
    name: 'songs',
    permissions: [],
    description: "this sends a list of songs.",
    aliases: ['music', 'song'],
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#2C2F33')
            .setTitle('**Here is the list of the songs.**')
            .addFields({
                    name: 'T.S.O.M.E.C. - Mildwell',
                    value: '[Click here](https://www.youtube.com/watch?v=kyjQcn43D3Q)'
                }, {
                    name: 'Let me make you happy - Mildwell',
                    value: '[Click here](https://youtu.be/ACsMshANte0)'
                }

            )
        message.channel.send({ embeds: [newEmbed] });
    }

} 