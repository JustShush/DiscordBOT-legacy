const { MessageEmbed } = require("discord.js");
module.exports = {
	name: "servers",
	permissions: [],
	description: "this shows all the servers the bot is in :)",
	aliases: [],
	execute(client, message, cmd, args, Discord) {
		// This shows all the server's name and id that the bot is in :)
		let serverList = '';
		client.guilds.cache.forEach(guild => {
			//server_name = `${guild.name}`;
			//server_id = `${guild.id}`;
			serverList = serverList.concat(`**${guild.name}**\n${guild.id}\n`);
		});
		
		const serversEmbed = new MessageEmbed()
		.setTitle(
			`Every server YourBestBot is in :)` // [${client.guilds.cache.size}]
			)
			.setDescription(`In **${client.guilds.cache.size}** Servers!\nWith **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}** Users!\n\n${serverList}`)
			.setFooter({ text:`Requested by ` + message.author.username + ` on ` + message.guild.name, iconURL: message.guild.iconURL() })
			.setTimestamp()
			//.setFields({name: server_name, value: server_id, inline: true});

		/* message.channel.send(info);
		const embed = new MessageEmbed()
		  .setColor("RANDOM")
		  .setTitle("Servers that have YourBestBot")
		  .addField(info);
		message.delete();
		message.channel.send({ embeds: [embed] }); */ 

		message.delete();
		message.channel.send({
			embeds: [serversEmbed],
		});
	},
};
