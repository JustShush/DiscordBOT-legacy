const suggestSchema = require('../../Models/SuggestModel.js');

module.exports = {
    name: 'setup-suggest',
    permissions: ['MANAGE_GUILD'],
    description: "this sends help!",
    aliases: ['setup-sug', 'sg'],
    async execute(client, message, cmd, args, Discord) {
        let channel = message.mentions.channels.first();
        if (!channel) {
            return message.reply({
                content: 'You need to mention a channel to setup the Suggest Channel.',
                ephemeral: true
            })
        }

        //let suggestMSG = args.slice(1).join(' ')
        //if (!suggestMSG) {
        //    return message.reply({
        //        content: 'You need to suggest something.',
        //        ephemeral: true
        //    })
        //}

        suggestSchema.findOne({
            GuildID: message.guild.id
        }, async (err, data) => {
            if (!data) { // if there is no data in the data base it will create a new one.
                new suggestSchema({
                    GuildID: message.guild.id,
                    ChannelID: channel.id,
                    //Message: suggestMSG
                }).clone()
            }
            message.channel.send(`✅ Suggest channel has been setup.\nChannel: ${channel}`)

        })
    }
}