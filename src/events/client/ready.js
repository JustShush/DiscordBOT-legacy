const color = require('colors');
const mongoose = require('mongoose');
const { DISCORD_TOKEN, clientId, PREFIX, MONGO_URI, AppClientID, AppSecretToken} = require("../../../config.json");

module.exports = async (Discord, client, statcord) => {

	const Channel = client.channels.cache.get("704028617595682876") // comas

	//const Guilds = client.guilds.cache.map(guild => guild.id);
	//console.log(Guilds);

	mongoose.connect(MONGO_URI, {
		keepAlive: true
	}).then(() => console.log("Connected to mongoDB".brightGreen)), e => console.error(e);

	const arrayOfActivities = [
		`Over ${client.guilds.cache.size} servers! 🙂`,
		`Prefix is: "+"`,
		"+help | discord.gg/BSfXFmB",
		`Over ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Users!`,
	];

	const arrayOfStatus = [
		'WATCHING',
		//'STREAMING',
		'WATCHING',
	]

	let counter = 0
	const updateActivities = () => {
		client.user.setPresence({
			status: 'online',
			activities: [{
				name: arrayOfActivities[counter],
				type: 'WATCHING',
			}]
		})

		if (++counter >= arrayOfActivities.length) {
			counter = 0
		}

		setTimeout(updateActivities, 100000)
	}
	updateActivities()

	const upTimeFunction = () => {
		let totalSeconds = (client.uptime / 1000);
		let days = Math.floor(totalSeconds / 86400);
		totalSeconds %= 86400;
		let hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		let minutes = Math.floor(totalSeconds / 60);
		let seconds = Math.floor(totalSeconds % 60);
		
		//console.log(seconds);
		//console.log(days); */
		/* if (seconds == 5){
			Channel.send({ content: `឵\n\n**${client.user} 5 sec**\n\n឵`})
			seconds == 61;
		}
		if (seconds == 10){
			Channel.send({ content: `឵\n\n**${client.user} 10 sec**\n\n឵`})
			seconds == 61;
		} */
		/* if (hours == 12){
			Channel.send({ content: `${client.user} está online há mais de 12 Horas!\n||<@453944662093332490>||`})
		}
		if (days == 1){
			Channel.send({ content: `Damm, ${client.user} está online há 1 dia!\n||<@453944662093332490>||`})
		}
		if (days == 15){
			Channel.send({ content: `${client.user} está online há 15 dias!\n||<@453944662093332490>||`})
		}
		if (days == 25){
			console.log(`${client.user.username} 25 dias!`.brightMagenta)
			Channel.send({ content: `឵\n\n**${client.user} is on há RAMPAGE!!!!**\n\n឵ \n||<@453944662093332490>||`})
		}
		if (days == 30){
			console.log(`${client.user.username} 30 dias!`.brightGreen)
			Channel.send({ content: `឵\n\n\n**${client.user} is UNSTOPPABLE!!!!**\n\n\n឵ \n||<@453944662093332490>||`})
		} */
		if (days == 31){
			console.log(`${client.user.username} 31 dias!`.brightRed)
			Channel.send({ content: `឵\n\n\n\n**${client.user} is GODLIKE!!!!**\n\n\n\n឵ \n||<@453944662093332490>||`})
		}
		setTimeout(upTimeFunction, 1000)
	}
	upTimeFunction()

		// This shows all the server's name and id that the bot is in :)
	client.guilds.cache.forEach(guild => {
		console.log(`${guild.name} | ${guild.id}`.brightRed);
	})

	// statcord.autopost();
	console.log(`${client.user.username} está on-line!\nEm ${client.guilds.cache.size} Servidores!`.brightMagenta.bold);

}
