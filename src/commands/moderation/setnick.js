module.exports = {
    name: 'setnick',
    permissions: ["MANAGE_NICKNAMES"],
    description: "this changes the nickname!",
    aliases: ['nickname'],
    execute(client, message, cmd, args, Discord) {

        const {
            guild,
            channel
        } = message

        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)


        if (args.length <= 1) {
            message.channel.send('PLS mention someone and then the name that you want to change to.\nExample: `+setnick <@!SOMEONE> <THE_NEW_NAME>`')
        } else {
            member.setNickname(args[1])
            message.channel.send(`Nickname changed to: ` + args[1])
        }

    }

}