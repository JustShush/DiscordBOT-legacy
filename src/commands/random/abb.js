module.exports = { // i need to put a button to the commands maybe thats a little bit better and prettier
    name: 'abb',
    permissions: [],
    description: "this sends help!",
    aliases: ['abb_info'],
    execute(client, message, cmd, args, Discord, interaction) {

        if (cmd === 'help_info') {
            message.reply({
                content: "I'm not sure why are you using this comamnd?\n Is everything good at home? do you need help? ||<3||",
                ephemeral: true
            })
        } else {

            message.channel.send({
                content: ' teste'
            }).then(msg => {
                setTimeout(function () {
                    if (msg) msg.edit('2')
                }, 4000)
            });

        }

    }
}