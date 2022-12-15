module.exports = {                 // eu devo so apagar isto existem botoes agora e sao muito melhores do que estar a corrigir isto tudo
    name: 'reactionrole',
    permissions: [],
    description: "reactrole",
    aliases: ['rr'],
    async execute(client, message, cmd ,args, Discord) {
        const channel = '787378827822759966';
        console.log(message)
        const twitchPingRole = message.roles.cache.some(role => role.name === 'Twitch'); // Twitch
        const youtubePingRole = message.guild.roles.cache.find(role => role.name === 'Youtube');
        const giveawayPingRole = message.guild.roles.cache.find(role => role.name === 'Giveaway');
        const anaoPingRole = message.guild.roles.cache.find(role => role.name === 'Announcements');

        const twitchPingEmoji = '📽️';
        const youtubePingEmoji = '📺';
        const giveawayPingEmoji = '🎉';
        const anaoPingEmoji = '📢';

        let embed = new Discord.MessageEmbed()
            .setColor('#7289da')
            .setTitle('**Escolhe que pings queres receber!**')
            .setDescription('Quando escolheres,sempre que alguma coisa acontecer sobre o ping que escolhes-te vais receber um ping!\n\n' 
               + `${twitchPingEmoji} para Twitch pings\n` 
               + `${youtubePingEmoji} para Youtube pings\n` 
               + `${giveawayPingEmoji} para Giveaway pings\n` 
               + `${anaoPingEmoji} para Announcements pings`);

        let messageEmbed = await message.channel.send({ embeds: [embed] });
        messageEmbed.react(twitchPingEmoji);
        messageEmbed.react(youtubePingEmoji);
        messageEmbed.react(giveawayPingEmoji);
        messageEmbed.react(anaoPingEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === twitchPingEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(twitchPingRole);
                }
                if (reaction.emoji.name === youtubePingEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(youtubePingRole);
                }
                if (reaction.emoji.name === giveawayPingEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(giveawayPingRole);
                }
                if (reaction.emoji.name === anaoPingEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(anaoPingRole);
                }
            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === twitchPingEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(twitchPingRole);
                }
                if (reaction.emoji.name === youtubePingEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(youtubePingRole);
                }
                if (reaction.emoji.name === giveawayPingEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(giveawayPingRole);
                }
                if (reaction.emoji.name === anaoPingEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(anaoPingRole);
                }
            } else {
                return;
            }
        });
    }
}