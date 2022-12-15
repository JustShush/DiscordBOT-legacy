module.exports = {
    name: 'uptime',
    permissions: [],
    description: "this tells the uptime off the bot!",
    aliases: ['ut'],
    execute(client, message, cmd, args, Discord) {

        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

        const newEmbed = new Discord.MessageEmbed()
            .setColor('#36393F')
            .setTitle('**My Uptime:**')
            .setDescription(uptime)

        message.delete();
        message.channel.send({
            embeds: [newEmbed]
        });
    }
}