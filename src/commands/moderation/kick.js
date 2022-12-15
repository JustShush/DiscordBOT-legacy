module.exports = {
    name: 'kick',
    permissions: ["KICK_MEMBERS"],
    discription: 'kick em alguem do servidor',
    async execute(client, message, cmd, args, Discord) {

        const TargetMember = message.mentions.members.first();

        let reason = args.slice(1).join(" ");

        if (!reason) reason = "No reason given.";

        if (!args[0]) return message.channel.send({
            embeds: [new Discord.MessageEmbed().setColor("RED").setDescription("⛔ You need to specify a user.")]
        });

        if (!TargetMember) return message.channel.send({
            embeds: [new Discord.MessageEmbed().setColor("RED").setDescription("⛔ This user is not valid or no-longer is in the server.")]
        });

        if (!TargetMember.bannable) return message.channel.send({
            embeds: [new Discord.MessageEmbed().setColor("RED").setDescription("⛔ I can't kick this user.")]
        });

        await TargetMember.send({
            embeds: [new Discord.MessageEmbed().setColor("RED").setDescription(`⛔ You were kick!\nby: <@${message.author.id}> \n Reason: \n \`\`\`${reason}\`\`\``)]
        });

		const kickEmbed = new Discord.MessageEmbed()
		.setColor("GREEN")
		.setFooter(`Requested by ` + message.author.username)
        .setTimestamp()
		if (!reason) {
			kickEmbed.setDescription("✅ Seccessfully kicked: " + TargetMember.user.tag + ".")
		}
		kickEmbed.setDescription("✅ Seccessfully kicked: " + TargetMember.user.tag + ".\nReason: " + `\n \`\`\`${reason}\`\`\``)

        await TargetMember.kick({
            reason: reason
        }).then(() => message.channel.send({
            embeds: [kickEmbed]
        }));
    }
}