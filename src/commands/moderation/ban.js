module.exports = {
	name: "ban",
	permissions: ["BAN_MEMBERS"],
	discription: "bans someone of the server",
	async execute(client, message, cmd, args, Discord) {
		if (cmd === "baninfo") {
			const infoEmbed = new Discord.MessageEmbed()
				.setColor("#7e11dd")
				.setTitle(`**${cmd}**`)
				.setDescription('Do: `+ban @"the person you want to ban"`')
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

			if (!TargetMember.bannable)
				return message.channel.send({
					embeds: [
						new Discord.MessageEmbed().setColor("RED").setDescription("⛔ I can't ban this user."),
					],
				});

			await TargetMember.send({
				embeds: [
					new Discord.MessageEmbed()
						.setColor("RED")
						.setDescription(`⛔ You were banned!\nby: <@${message.author.id}>  \n Reason: \n \`\`\`${reason}\`\`\``),
				],
			});

			const banEmbed = new Discord.MessageEmbed()
				.setColor("GREEN")
				.setFooter(`Requested by ` + message.author.username)
				.setTimestamp();
			if (!reason) {
				banEmbed.setDescription("✅ Seccessfully banned: " + TargetMember.user.tag + ".");
			}
			banEmbed.setDescription(
				"✅ Seccessfully banned: " + TargetMember.user.tag +".\nReason: " +`\n \`\`\`${reason}\`\`\``
				);

			await message.channel
				.send({ embeds: [banEmbed] })
				.then(() => TargetMember.ban({ reason: reason }));
		}
	},
};
