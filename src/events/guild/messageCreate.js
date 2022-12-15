const color = require('colors');
const { DISCORD_TOKEN, clientId, PREFIX, MONGO_URI, AppClientID, AppSecretToken} = require("../../../config.json");

module.exports = async (Discord, client, message) => {
    const prefix = PREFIX;
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    //const args = message.content.slice(prefix.length).split(/ +/);
    const args = message.content.toLowerCase().slice(prefix.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if (!command) return message.reply("`That command doesn't exists or you misspelled it :)`").then(msg => {
        setTimeout(function () {
            if (msg) msg.delete()
        }, 4000)
        message.delete()
    }), console.log(`\nGuild: ${message.guild.name}\nChannel: "${message.channel.name}"\nMessage: "${message.content}"\nAuthor: "${message.author.tag}"`.brightRed);

    if (message.mentions && message.mentions.has(client.user.id)) { // trying to when someone pings the bot it respondes with a message.
        return //message.reply('Hi!')
    };

    //{   message.channel.send('That command does not exists or you are miss typing it :)')
    //    console.log(`Guild: ${message.guild.name}\nChannel: "${message.channel.name}"\nCommand: "${command.name}"\nMessage: ${message.content}`) }

    const validPermissions = [
        "CREATE_INSTANT_INVITE",
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "ADMINISTRATOR",
        "MANAGE_CHANNELS",
        "MANAGE_GUILD",
        "ADD_REACTIONS",
        "VIEW_AUDIT_LOG",
        "PRIORITY_SPEAKER",
        "STREAM",
        "VIEW_CHANNEL",
        "SEND_MESSAGES",
        "SEND_TTS_MESSAGES",
        "MANAGE_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY",
        "MENTION_EVERYONE",
        "USE_EXTERNAL_EMOJIS",
        "VIEW_GUILD_INSIGHTS",
        "CONNECT",
        "SPEAK",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MOVE_MEMBERS",
        "USE_VAD",
        "CHANGE_NICKNAME",
        "MANAGE_NICKNAMES",
        "MANAGE_ROLES",
        "MANAGE_WEBHOOKS",
        "MANAGE_EMOJIS_AND_STICKERS",
        "USE_APPLICATION_COMMANDS",
        "REQUEST_TO_SPEAK",
        "MANAGE_THREADS",
        "USE_PUBLIC_THREADS",
        "USE_PRIVATE_THREADS",
        "USE_EXTERNAL_STICKERS",
    ]

    if (command.permissions.length) {
        let invalidPerms = []
        for (const perm of command.permissions) {
            if (!validPermissions.includes(perm)) {
                return console.log(`Invalid Permissions: ${perm}`.brightRed);
            }
            if (!message.member.permissions.has(perm)) {
                invalidPerms.push(perm);
                break;
            }
        }
        if (invalidPerms.length) {
            return message.channel.send(`Missing Permissions: \`${invalidPerms}\``);
        }
    }

    try {
        command.execute(client, message, cmd, args, Discord);
    } catch (err) {
        console.log(err);
        console.log(`\nGuild: ${message.guild.name}\nChannel: "${message.channel.name}"\nCommand: "${command.name}"\nMessage: ${message.content}`.brightRed)
        const errorRunCmd = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("Error")
            .setDescription(`Sorry there was an error running that command!\n\`\`\`err\n${err}\n\`\`\``)
        message.channel.send({
            embeds: [errorRunCmd]
        }).then(msg => {
            setTimeout(function () {
                if (msg) msg.delete()
            }, 4000)
        });
    }
}