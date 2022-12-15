const Schema = require('../../Models/SuggestModel.js')

module.exports = {
    name: 'suggest',
    permissions: [],
    description: "this sends help!",
    aliases: ['sug', 'sug_info', 'suggest_info'],
    async execute(client, message, cmd, args, Discord) { // im trying to do this for different guilds (its not working now)

        if (cmd === 'sug_info' || cmd === 'suggest_info') {

            const infoEmbed = new Discord.MessageEmbed()
                .setColor('#7e11dd')
                .setTitle(`**${cmd}**`)
                .setDescription('Do: `+suggest_info`')
                .setTimestamp()
            message.reply({
                embeds: [infoEmbed],
                ephemeral: true
            })

        } else {

            const {
                guild,
            } = message

            const user = message.mentions.users.first() || message.member.user
            const member = guild.members.cache.get(user.id)

            Schema.findOne({
                GuildID: message.guild.id
            }, async (err, data) => {
                if (!data) return;
                let channel = client.channels.cache.get(data.ChannelID);

                let messageArgs = args.join(' ');

                const sugEmbed = new Discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({
                        dynamic: true
                    }))
                    .setDescription(messageArgs)
                    .setColor(member.displayHexColor || 'RANDOM')
                channel.send({
                    embeds: [sugEmbed]
                }).then((msg) => {
                    msg.react('<:upvote:949407628348514355>');
                    msg.react('<:downvote:949407661407993866>');
                    message.delete();
                }).catch((err) => {
                    throw err
                })



            }).then(console.log('34'));

            //const suggest = await DB.findOne({
            //    Guild: message.guild.id
            //Message: message_sug
            //});

            //const channel = client.channels.cache.find(channel => channel.name === 'comas');
            //if (!channel) return message.channel.send("this channel does not exist!");

            //let messageArgs = args.join(' ');

            //const sugEmbed = new Discord.MessageEmbed()
            //    .setAuthor(message.author.tag, message.author.displayAvatarURL({
            //        dynamic: true
            //    }))
            //    .setDescription(messageArgs)
            //    .setColor(member.displayHexColor || 'RANDOM')
            //channel.send({
            //    embeds: [sugEmbed]
            //}).then((msg) => {
            //    msg.react('<:upvote:949407628348514355>');
            //    msg.react('<:downvote:949407661407993866>');
            //    message.delete();
            //}).catch((err) => {
            //    throw err
            //})
            //message.delete();

        }
    }
}