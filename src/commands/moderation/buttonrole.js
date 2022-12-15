module.exports = { // I just cant remove the role after someone clicks to the button 
    name: 'buttonrole',
    permissions: ["MANAGE_CHANNELS"],
    description: "Button reactrole",
    aliases: ['br'],
    async execute(client, message, cmd, args, Discord) {

        const {
            guild
        } = message

        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)

        const channel = '787378827822759966'; // channel to send the message to 

        const twitchPingRole = message.guild.roles.cache.find(role => role.name === 'Twitch'); // Twitch
        const youtubePingRole = message.guild.roles.cache.find(role => role.name === 'Youtube');
        const giveawayPingRole = message.guild.roles.cache.find(role => role.name === 'Giveaway');
        const anaoPingRole = message.guild.roles.cache.find(role => role.name === 'Announcements');

        const twitchPingEmoji = '📽️';
        const youtubePingEmoji = '📺';
        const giveawayPingEmoji = '🎉';
        const anaoPingEmoji = '📢';

        const pingEmbed = new Discord.MessageEmbed()
            .setTitle('**Choose the pings that you want to receive!**')
            .setColor('#2f3136')
            .setDescription('When you choose, whenever something happens about the ping you choose you will get a ping :)\n\n' +
                `${twitchPingEmoji} para Twitch pings\n` +
                `${youtubePingEmoji} para Youtube pings\n` +
                `${giveawayPingEmoji} para Giveaway pings\n` +
                `${anaoPingEmoji} para Announcements pings`);

        const row = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                .setCustomId('twitchBtn')
                .setLabel('Twitch Ping')
                .setStyle('PRIMARY')
                .setEmoji('📽️')
            ).addComponents(
                new Discord.MessageButton()
                .setCustomId('youtubeBtn')
                .setLabel('Youtube Ping')
                .setStyle('PRIMARY')
                .setEmoji('📺'),

            ).addComponents(
                new Discord.MessageButton()
                .setCustomId('giveawayBtn')
                .setLabel('Giveaway Ping')
                .setStyle('PRIMARY')
                .setEmoji('🎉'),

            ).addComponents(
                new Discord.MessageButton()
                .setCustomId('anaoBtn')
                .setLabel('Announcements')
                .setStyle('PRIMARY')
                .setEmoji('📢'),

            );

        message.delete()
        await message.channel.send({
            embeds: [pingEmbed],
            components: [row]
        });

        client.on('interactionCreate', async (interaction) => {
            if (interaction.message.partial) await interaction.message.fetch();
            if (interaction.partial) await interaction.fetch();
            if (user.bot) return;
            if (!interaction.message.guild) return;

            if (interaction.isButton()) {

                if (interaction.customId === 'twitchBtn') {

                    await interaction.member.roles.add(twitchPingRole);
                    interaction.reply({
                        content: 'You have received the **Twitch Ping** role :)',
                        ephemeral: true
                    }).then(msg => {
                        setTimeout(function () {
                            if (msg) msg.delete()
                        }, 6000)
                    });

                }
                if (interaction.customId === 'youtubeBtn') {

                    await interaction.member.roles.add(youtubePingRole);
                    interaction.reply({
                        content: 'You have received the **Youtube Ping** role :)',
                        ephemeral: true
                    }).then(msg => {
                        setTimeout(function () {
                            if (msg) msg.delete()
                        }, 6000)
                    });

                }
                if (interaction.customId === 'giveawayBtn') {

                    await interaction.member.roles.add(giveawayPingRole);
                    interaction.reply({
                        content: 'You have received the **Giveaway Ping** role :)',
                        ephemeral: true
                    }).then(msg => {
                        setTimeout(function () {
                            if (msg) msg.delete()
                        }, 6000)
                    });

                }
                if (interaction.customId === 'anaoBtn') {

                    await interaction.member.roles.add(anaoPingRole);
                    interaction.reply({
                        content: 'You have received the **Announcements Ping** role :)',
                        ephemeral: true
                    }).then(msg => {
                        setTimeout(function () {
                            if (msg) msg.delete()
                        }, 6000)
                    });

                }

            }

        })
    }
}