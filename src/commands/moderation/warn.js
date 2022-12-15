module.exports = {
	name: "warn",
	permissions: [],
	discription: "bans someone of the server",
	async execute(client, message, cmd, args, Discord) {
		if (cmd === "warn_info") {
			const infoEmbed = new Discord.MessageEmbed()
				.setColor("#7e11dd")
				.setTitle(`**${cmd}**`)
				.setDescription('Do: `+warn @"the person you want to warn"`')
				.setTimestamp();
			message.channel.send({
				embeds: [infoEmbed],
			});
		} else {
			const TargetMember = message.mentions.members.first();

			let reason = args.slice(1).join(" ");

			if (!reason) reason = "No reason given.";

			if (!args[0])
				return message.channel.send({
					embeds: [
						new Discord.MessageEmbed()
							.setColor("RED")
							.setDescription("⛔ You need to specify a user."),
					],
				});

			if (!TargetMember)
				return message.channel.send({
					embeds: [
						new Discord.MessageEmbed()
							.setColor("RED")
							.setDescription("⛔ This user is not valid or no-longer is in the server."),
					],
				});
				
				const dmEmbed = new Discord.MessageEmbed().setColor("RED");
				//.setDescription(`⛔ You were warned! \n Reason: \n \`\`\`${reason}\`\`\``)

			try {
				/* await //user.send(`${message.author}`)
					user.send({ embeds: [dmEmbed] }); */

				/* if (!reason) {
					dmEmbed.setDescription("⛔ You were warned! " + TargetMember.user.tag + ".");
				} */
				dmEmbed.setDescription("⛔ You were warned!\nby: " + `<@${message.author.id}>` + "\nReason: " + `\n \`\`\`${reason}\`\`\``);

				
				//await message.channe.send({ embeds: [dmEmbed]});
				await TargetMember.send({ embeds: [dmEmbed] });
			} catch (error) {
				return message.reply("This user have DMs closed i can`t DM the person!");
			}

			await message.channel.send({ embeds: [dmEmbed] })
		
		}
	},
};
