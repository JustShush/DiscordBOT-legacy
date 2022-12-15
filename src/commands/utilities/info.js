module.exports = {
    name: 'info',
    permissions: [],
    description: "this sends help, about the info cmd.",
    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#2C2F33')
            .setTitle('**Info Help Menu**')
            .addFields({
                    name: 'If you don\'t understand on how to use the command just add `_` and the word `info` in front of the command and you will receive a message on how to use the command.',
                    value: "Example: \`+<command>_info\`"
                }

            )
        message.channel.send({ embeds: [newEmbed] });
    }

} 