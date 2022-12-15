module.exports = {
    name: 'modnick',
    permissions: ["MANAGE_NICKNAMES"],
    description: "this changes the nickname!",
    aliases: [],
    execute(client, message, cmd, args, Discord) { // add this to guildMemberAdd

        const {
            guild,
            channel
        } = message

        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)

        
        //message.delete();
        // the function that generates the numbers
        const randomID = length => Math.floor(Math.random() * Math.pow(10, length));
        // replace 3 with how many characters you want
        randomID(3) // return example: 581
        const newnick = randomID(5)
        // to change someone's nickname
        member.setNickname("Moderated Nickname " + newnick)
        message.channel.send(`Nickname changed :)`)

    }

}