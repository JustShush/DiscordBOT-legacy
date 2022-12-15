const byeSchema = require('../../Models/Bye.js')

module.exports = {
    name: 'setup-bye',
    permissions: ['MANAGE_GUILD'],
    description: "this sends help!",
    aliases: ['sb'],
    async execute(client, message, cmd, args, Discord) {
        let channel = message.mentions.channels.first();
        if (!channel) {
            return message.reply({
                content: 'You need to mention a channel to setup the Bye Channel.',
                ephemeral: true
            })
        }

        let byeMSG = args.slice(1).join(' ')
        if (!byeMSG) {
            return message.reply({
                content: 'You need to set a Bye message.',
                ephemeral: true
            })
        }

        byeSchema.findOne({
            Guild: message.guild.id
        }, async (err, data) => {
            if (!data) { // if there is no data in the data base it will create a new one.
                new byeSchema({
                    Guild: message.guild.id,
                    Channel: channel.id,
                    Msg: byeMSG
                }).save().clone()
            }

            message.channel.send(`✅ Bye message has been setup.\nChannel: ${channel} \nMessage: \`${byeMSG}\``)

        })
    }
}