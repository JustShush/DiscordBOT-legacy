const {
    MessageEmbed
} = require("discord.js")

module.exports = {
    name: 'announce',
    permissions: ["MANAGE_CHANNELS"],
    description: "this sends help!",
    aliases: ['ann', 'anngg','announceinfo'],
    execute(client, message, cmd, args, Discord) {
        
        if (cmd === 'announceinfo') {
            const infoEmbed = new Discord.MessageEmbed()
                .setColor('#7e11dd')
                .setTitle(`**${cmd}**`)
                .setDescription('Do: `+announce "YOUR ANNOUNCEMENT HERE"`')
                .setTimestamp()
            message.channel.send({ embeds: [infoEmbed] })
        } else if (cmd === 'ann') {
            const channel = client.channels.cache.find(channel => channel.name === 'comas');
            if (!channel) return message.channel.send("this channel does not exist!");

            let messageArgs = args.join(' ');

            const annEmbed = new MessageEmbed()
                //.setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
                .setTitle(messageArgs)
                .setColor('RANDOM')
                .setTimestamp()
            channel.send({ embeds: [annEmbed] })
            //message.delete();
        } else if (cmd === 'anngg') {
            const channel = client.channels.cache.find(channel => channel.name === 'comandos');
            if (!channel) return message.channel.send("this channel does not exist!");

            let messageArgs = args.join(' ');

            const annEmbed = new MessageEmbed()
                //.setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
                .setTitle(messageArgs)
                .setColor('RANDOM')
                .setTimestamp()
            channel.send({ embeds: [annEmbed] })
            message.delete();
        }
        //message.delete();
    }
}