module.exports = {
    name: 'hmod',
    permissions: ["MANAGE_MESSAGES", "KICK_MEMBERS"],
    description: "this sends help!",
    aliases: ["hm"],
    execute(client, message, cmd, args, Discord) {
        
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#7e11dd')
            .setAuthor('YourBestBOT Mod Commands', 'https://cdn.discordapp.com/attachments/704028617595682876/813860972283428936/Foto_transparente.PNG', 'https://discord.com/oauth2/authorize?client_id=747412110782234654&scope=bot&permissions=2146958847')
            .addFields({
                name: 'Clear',
                value: '`+clear`',
                inline: true
            }, {
                name: 'Mute',
                value: '`+mute`',
                inline: true
            }, {
                name: 'Unmute',
                value: '`+unmute`',
                inline: true
            }, {
                name: 'Kick',
                value: '`+kick`',
                inline: true
            }, {
                name: 'Ban',
                value: '`+ban`',
                inline: true
            }, )
            .setTimestamp()
            .setFooter('YourBestBOT');

        message.channel.send({ embeds: [newEmbed] });
        //if (!args['mod']) return message.send(newEmbed);
    }

}