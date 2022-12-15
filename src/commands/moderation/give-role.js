const { DISCORD_TOKEN, clientId, PREFIX, MONGO_URI, AppClientID, AppSecretToken} = require("../../../config.json");
module.exports = { // i need to put a button to the commands maybe thats a little bit better and prettier
    name: 'give-role',
    permissions: ["MANAGE_ROLES"],
    description: "this gives a role to a user",
    aliases: ['gr', 'giverole', 'giverole_info', 'give-role_info'],
    execute(client, message, cmd, args, Discord) {

        if (cmd === 'giverole_info' || cmd === 'give-role_info') {

            const giveroleEmbed = new Discord.MessageEmbed()
                .setColor('#2C2F33')
                .setTitle(`${message} help:`)
                .setDescription(`To use this command use the it like this:\n\`${PREFIX}give-role <@MEMNBER> <@ROLE>\``)

            message.reply({
                embeds: [giveroleEmbed],
                ephemeral: true
            })
        } else {

            let user = message.mentions.users.first() // Gets the user that is tagged
            let role = message.mentions.roles.first() // Gets the role that is tagged
            userId = user.id // Gets the user id
            roleId = role.id
            let roleAdd = message.guild.members.cache.find(user => user.id === userId) // Finds the userId
            if (user) { // Checks if the user is tagged is a user
                //roleAdd.roles.add(role) // Adds the role to the user
            } else {
                message.reply({
                    content: `Pls you need to mention someone to add the role.\nLike this: \`${PREFIX}give-role <@MEMNBER> <@ROLE>\``,
                    ephemeral: true
                })
            }
            if (!role) {
                message.reply({
                    content: `Pls you need to mention a role to add to the member.\nLike this: \`${PREFIX}give-role <@MEMNBER> <@ROLE>\``,
                    ephemeral: true
                })
            }

            if (user.roles.cache.has(roleId)) {
                message.reply({
                    content: `The user already has that role`,
                    ephemeral: true
                })
            } else {
                roleAdd.roles.add(role) // Adds the role to the user
                message.reply({
                    content: `The role: ${role} has been hadded to ${user.username}.\nBy <@${message.author.id}.>`,
                    ephemeral: true
                });
            }
        }
    }
}