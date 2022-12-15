module.exports = { // the emojis aren't working :(
    name: 'wel',
    permissions: [],
    description: "This sends a Welcome message :)",
    aliases: [],
    async execute(client, message, cmd, args, Discord) {
        message.delete()
        message.channel.send(`:Clap: <a:welcome1:942160663759962255> to **${message.guild.name}**!! Make sure to visit <#722524614768590889> to get started <:crumbdance1:942168866073763840> \n> *~ From ${message.author} ~*`)
    }
}