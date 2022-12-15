const { DISCORD_TOKEN, clientId, PREFIX, MONGO_URI, AppClientID, AppSecretToken} = require("../../config.json");

module.exports = { // i need to put a button to the commands maybe thats a little bit better and prettier
    name: 'help',
    permissions: [],
    description: "this sends help!",
    aliases: ['help_info'],
    execute(client, message, cmd, args, Discord, interaction) {

        if (cmd === 'help_info') {
            message.reply({
                content: "I'm not sure why are you using this comamnd?\n Is everything good at home? do you need help? ||<3||",
                ephemeral: true
            })
        } else {

            const newEmbed = new Discord.MessageEmbed()
                .setColor('#2C2F33')
                .setTitle('**Help Menu**')
                .addFields({
                    name: 'See all the commands using:',
                    value: "\`" + PREFIX + "commands\`"
                }, {
                    name: 'If you are not sure on how to use one of the commands tun the name of the comammand and then \`info\`:',
                    value: "\`" + PREFIX + "<command>_info\`"
                }, {
                    name: 'Invite me to your server using:',
                    value: '\`' + PREFIX + `bot\` ` + 'and follow the instructions there.'
                }, )

            const row = new Discord.MessageActionRow()
                .addComponents(
                    new Discord.MessageButton()
                    .setCustomId('HERE')
                    .setLabel('Here')
                    .setStyle('SUCCESS')
                    .setEmoji('🤖')
                    //.setDisabled(true) // isto e que faz com que o buttao esteja desligado

                );

            message.channel.send({
                embeds: [newEmbed],
                components: [row]
            });

        }

    }
}