module.exports = {
    name: 'game',
    permissions: [],
    description: "this chooses a game to play randomly.",
    aliases: ["gm"],
    execute(client, message, cmd, args, Discord) {
        const facts = ["Rocket", "Carb Game"];
        const fact = Math.floor(Math.random() * facts.length);
        message.delete()
        message.channel.send(facts[fact]);
    }

}