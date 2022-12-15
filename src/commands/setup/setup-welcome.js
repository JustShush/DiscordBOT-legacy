const welcomeSchema = require('../../Models/Welcome.js');

module.exports = {
    name: 'setup-welcome',
    permissions: ['MANAGE_GUILD'],
    description: "this sends help!",
    aliases: ['setup-wel', 'sw'],
    async execute(client, message, cmd, args, Discord) {
        let channel = message.mentions.channels.first();
        if (!channel) {
            return message.reply({
                content: 'You need to mention a channel to setup the Welcome Channel.',
                ephemeral: true
            })
        }

        let welcomeMSG = args.slice(1).join(' ')
        if (!welcomeMSG) {
            return message.reply({
                content: 'You need to set a Welcome message.',
                ephemeral: true
            })
        }

        welcomeSchema.findOne({
            Guild: message.guild.id
        }, async (err, data) => {
            if (!data) { // if there is no data in the data base it will create a new one.
                new welcomeSchema({
                    Guild: message.guild.id,
                    Channel: channel.id,
                    Msg: welcomeMSG
                }).clone()
            }
            message.channel.send(`✅ Welcome message has been setup.\nChannel: ${channel} \nMessage: \`${welcomeMSG}\``)

        })
    }
}