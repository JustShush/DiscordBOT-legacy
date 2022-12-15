module.exports = { // the bot runs and sends everything but when i click on the "menu" button it doesnt respond and doesnt gives any error 
	name: 'commands', // if para qunando alguem clica no button staff se tiver a role the admin ou ajudante manda uma certa embed com todos os cmds, caso contrário mostra menos cmds
	permissions: [],
	description: "this sends all the commands available.",
	aliases: ['cmd', 'cmd_info', 'commands_info'],
	async execute(client, message, cmd, args, Discord) {

		const {
			guild,
			channel
		} = message

		const user = message.mentions.users.first() || message.member.user
		const member = guild.members.cache.get(user.id)

		if (cmd === 'cmd_info' || cmd === 'commands_info') {
			const infoEmbed = new Discord.MessageEmbed()
				.setColor(member.displayHexColor || 'RANDOM')
				.setTitle(`**${cmd}**`)
				.setDescription('?? Do you have any question on how to use this command? u sure?')
				.setTimestamp()
			message.channel.send({
				embeds: [infoEmbed]
			})
		} else {

			const row = new Discord.MessageActionRow()
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

			const newEmbed = new Discord.MessageEmbed()
				.setColor(member.displayHexColor)
				.setTitle('**Commands**')
				.setThumbnail(message.guild.iconURL())
				.addFields({
					name: '`⚙️`- Utilities',
					value: '`help`, `ping`, `vote`, `userinfo`, `serverinfo`, `bot`, `bin`, `invites`, `info`, `uptime`',
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
					value: '`ping`,`quemequeegay`,`rickroll`,`vents`,`whoisbestgirl`, `songs`, `yomama`',
					inline: false
				}, {
					name: '`🔨`- Staff',
					value: '`hmod`,`kick`,`mute`,`unmute`,`ban`,`clear`,`slow`,`on`,`announce`,`dm`, `setnick`, `modnick`',
					inline: false
				})
				.setFooter({
					text: `Requested by ${message.author.username}`,
					iconURL: member.user.displayAvatarURL()
				})
				.setTimestamp()

			//Discord.interaction.followUp({ embeds: [newEmbed], components: [row]})
			const msg = await message.channel.send({
				constent: ' ',
				embeds: [newEmbed],
				components: [row]
			});

			row.components[0].setDisabled(true);
			row.components[1].setDisabled(true);
			row.components[2].setDisabled(true);
			row.components[3].setDisabled(true);
			setTimeout(async () => await msg.edit({
				components: [row]
			}), 20000);

		}
	}
}