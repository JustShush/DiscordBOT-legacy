module.exports = {
    name: 'quemequeegay',
    permissions: [],
    description: "this sends help!",
    aliases: ["qeqeg"],
    execute(client, message, cmd, args, Discord) {
        const facts = ["Bruno", "Bruno", "Bruno cabeça de PIROCA!", "Bruno cabeça de PILA!", "Gil cabeça de Piroca!", "Gil bot nao sabe usar comandos!", "ATuaPrima!"];
        const fact = Math.floor(Math.random() * facts.length);
        message.delete()
        message.channel.send(facts[fact]);
    }

}