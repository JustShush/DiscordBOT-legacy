const member = require('../../commands/commands')

module.exports = async (Discord, client, interaction) => {  

    if (!interaction.isCommand()) {}

    const command = client.commands.get(interaction.commandName);
    if (!command) {}

    if (interaction.isButton()) {

        /* I wanted to make this button like a default button, so i wouldnt need to be always writing it. 
         * I want to do this because im trying to make like a "paginator"
         * funciona tudo menos quando eu tento clicar no button de voltar para o menu ele nao vai */

        if (interaction.customId === 'utilbtn') {

            const utilRow = new Discord.MessageActionRow()
                .addComponents(
                    new Discord.MessageButton()
                    .setCustomId('pingbtn')
                    .setLabel('Ping')
                    .setStyle('SECONDARY'),

                ).addComponents(
                    new Discord.MessageButton()
                    .setCustomId('funbtn')
                    .setLabel('Fun')
                    .setStyle('SUCCESS')
                    .setEmoji('🎉'),

                ).addComponents(
                    new Discord.MessageButton()
                    .setCustomId('staffbtn')
                    .setLabel('Staff')
                    .setStyle('DANGER')
                    .setEmoji('🔨'),

                ).addComponents(
                    new Discord.MessageButton()
                    .setCustomId('cmdmenu')
                    .setLabel('Back to Menu')
                    .setStyle('SUCCESS')
                    //.setDisabled(true) // isto e que faz com que o buttao esteja desligado
                );

            const utilEmbed = new Discord.MessageEmbed()
                .setColor(member.displayHexColor)
                .setTitle('**Utilities Commands**')
                .addFields({
                    name: '`⚙️`- Utilities',
                    value: '`help`, `ping`, `vote`, `userinfo`, `serverinfo`, `bot`, `bin`, `invites`, `info`, `uptime`',
                    inline: false
                })

            /*await interaction.deferReply({
                ephemeral: true
            }).catch(() => {})*/ // if i want ephemeral i need to do interaction.deferReply({ephemeral: true}) if not just use interaction.deferReply()
            await interaction.update({
                embeds: [utilEmbed],
                components: [utilRow]
            })
        } else if (interaction.customId === 'pingbtn') {

            const pingRow = new Discord.MessageActionRow()
                .addComponents(
                    new Discord.MessageButton()
                    .setCustomId('utilbtn')
                    .setLabel('Utilities')
                    .setStyle('PRIMARY')
                    .setEmoji('⚙️'),

                ).addComponents(
                    new Discord.MessageButton()
                    .setCustomId('funbtn')
                    .setLabel('Fun')
                    .setStyle('SUCCESS')
                    .setEmoji('🎉'),

                ).addComponents(
                    new Discord.MessageButton()
                    .setCustomId('staffbtn')
                    .setLabel('Staff')
                    .setStyle('DANGER')
                    .setEmoji('🔨'),

                ).addComponents(
                    new Discord.MessageButton()
                    .setCustomId('cmdmenu')
                    .setLabel('Back to Menu')
                    .setStyle('SUCCESS')
                    .setDisabled(true) // isto e que faz com que o buttao esteja desligado
                );

            const pingEmbed = new Discord.MessageEmbed()
                .setColor(member.displayHexColor)
                .setTitle('**Ping Commands**')
                .addFields({
                    name: 'Check your ping',
                    value: '`+ping`',
                    inline: false
                })

            /*await interaction.deferReply({
                ephemeral: true
            }).catch(() => {})*/
            await interaction.update({
                embeds: [pingEmbed],
                components: [pingRow]
            })
        } else if (interaction.customId === 'funbtn') { // Fun Buttons

            const funRow = new Discord.MessageActionRow()
                .addComponents(
                    new Discord.MessageButton()
                    .setCustomId('utilbtn')
                    .setLabel('Utilities')
                    .setStyle('PRIMARY')
                    .setEmoji('⚙️'),

                ).addComponents(
                    new Discord.MessageButton()
                    .setCustomId('pingbtn')
                    .setLabel('Ping')
                    .setStyle('SECONDARY'),

                ).addComponents(
                    new Discord.MessageButton()
                    .setCustomId('staffbtn')
                    .setLabel('Staff')
                    .setStyle('DANGER')
                    .setEmoji('🔨'),

                ).addComponents(
                    new Discord.MessageButton()
                    .setCustomId('cmdmenu')
                    .setLabel('Back to Menu')
                    .setStyle('SUCCESS')
                    .setDisabled(true) // isto e que faz com que o buttao esteja desligado
                );

            const funEmbed = new Discord.MessageEmbed()
                .setColor(member.displayHexColor)
                .setTitle('**Fun Commands**')
                .addFields({
                    name: '`🎉`- Fun',
                    value: '`quemequeegay`,`rickroll`,`vents`,`whoisbestgirl`, `songs`, `yomama`',
                    inline: false
                })

            /*await interaction.deferReply({
                ephemeral: true
            }).catch(() => {})*/
            await interaction.update({
                embeds: [funEmbed],
                components: [funRow]
            })

        } else if (interaction.customId === 'staffbtn') {

            const staffRow = new Discord.MessageActionRow()
                .addComponents(
                    new Discord.MessageButton()
                    .setCustomId('utilbtn')
                    .setLabel('Utilities')
                    .setStyle('PRIMARY')
                    .setEmoji('⚙️'),

                ).addComponents(
                    new Discord.MessageButton()
                    .setCustomId('pingbtn')
                    .setLabel('Ping')
                    .setStyle('SECONDARY'),

                ).addComponents(
                    new Discord.MessageButton()
                    .setCustomId('funbtn')
                    .setLabel('Fun')
                    .setStyle('SUCCESS')
                    .setEmoji('🎉'),

                ).addComponents(
                    new Discord.MessageButton()
                    .setCustomId('cmdmenu')
                    .setLabel('Back to Menu')
                    .setStyle('SUCCESS')
                    .setDisabled(true) // isto e que faz com que o buttao esteja desligado
                );

            const staffEmbed = new Discord.MessageEmbed()
                .setColor(member.displayHexColor)
                .setTitle('**Staff Commands**')
                .addFields({
                    name: '`🔨`- Staff',
                    value: '`hmod`,`kick`,`mute`,`unmute`,`ban`,`clear`,`slow`,`on`,`announce`,`dm`, `setnick`, `modnick`',
                    inline: false
                })

            /*await interaction.deferReply({
                ephemeral: true
            }).catch(() => {})*/
            await interaction.update({
                embeds: [staffEmbed],
                components: [staffRow]
            })

        } else if (interaction.customId === ' cmdmenu') {
            console.log('test 1')
            const menuRow = new Discord.MessageActionRow()
                .addComponents(
                    new Discord.MessageButton()
                    .setCustomId('utilbtn')
                    .setLabel('Utilities')
                    .setStyle('PRIMARY')
                    .setEmoji('⚙️'),

                ).addComponents(
                    new Discord.MessageButton()
                    .setCustomId('pingbtn')
                    .setLabel('Ping')
                    .setStyle('SECONDARY'),

                ).addComponents(
                    new Discord.MessageButton()
                    .setCustomId('funbtn')
                    .setLabel('Fun')
                    .setStyle('SUCCESS')
                    .setEmoji('🎉'),

                ).addComponents(
                    new Discord.MessageButton()
                    .setCustomId('staffbtn')
                    .setLabel('Staff')
                    .setStyle('DANGER')
                    .setEmoji('🔨'),

                );

            const menuEmbed = new Discord.MessageEmbed()
                .setColor(member.displayHexColor)
                .setTitle('**Commands**')
                .addFields({
                    name: '`⚙️`- Utilities',
                    value: '`help`, `ping`, `vote`, `userinfo`, `serverinfo`, `invite`, `bin`, `info`, `uptime`',
                    inline: false
                }, {
                    name: 'Check your ping',
                    value: '`+ping`',
                    inline: false
                }, {
                    name: '\u200B',
                    value: '\u200B',
                    inline: false
                }, {
                    name: '`🎉`- Fun',
                    value: '`ping`,`quemequeegay`,`rickroll`,`vents`,`whoisbestgirl`, `songs`',
                    inline: false
                }, {
                    name: '`🔨`- Staff',
                    value: '`hmod`,`kick`,`mute`,`unmute`,`ban`,`clear`,`slow`,`on`,`announce`,`dm`, `setnick`, `modnick`',
                    inline: false
                }, )
                .setTimestamp()

            /*await interaction.deferReply({
                ephemeral: true
            }).catch(() => {})*/
            await interaction.update({
                content: 'this button is not working',
                embeds: [menuEmbed],
                components: [menuRow]
            });
        } else if (interaction.customId === 'HERE') {
            /*await interaction.deferReply({
                ephemeral: true
            }).catch(() => {})*/
            interaction.update({
                content: 'za',
                ephemeral: true
            })
        }

    }

    try {
        //await command.execute(interaction);
    } catch (err) {
        console.error(err);
        await interaction.reply({
            content: 'There was an error while executing this command!',
            ephemeral: true,
        })
    }
}