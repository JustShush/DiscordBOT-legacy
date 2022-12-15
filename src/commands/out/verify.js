module.exports = {
    name: 'verify',
    permissions: [],
    description: "this sends all the commands available.",
    aliases: [],
    execute(client, message, cmd, args, Discord) {

        const channel = message.guild.channels.cache.get('704028617595682876')

        const verifyEmbed = new Discord.MessageEmbed()
            .setTitle('✅ Verify here')
            .setDescription('Make sure to read the rules first <#722524614768590889>\nClick on the Button to be Verified.')
            .setColor('#008E44')

        const verifyBtn = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
            .setCustomId('verifybtn')
            .setLabel('Verify')
            .setStyle('SUCCESS')
            
        );

        channel.send({
            constent: ' ',
            embeds: [verifyEmbed],
            components: [verifyBtn]
        })
    }

}