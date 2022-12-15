const {
    MessageEmbed
} = require("discord.js")

module.exports = {
    name: 'say',
    permissions: ["MANAGE_CHANNELS"],
    description: "this sends help!",
    execute(client, message, cmd, args, Discord) {
        const sayEmbed = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setDescription(args.join(" "))
            .setTimestamp()
            .setColor("RANDOM")

        message.channel.send({ embeds: [sayEmbed] })
        message.delete();
    }
}