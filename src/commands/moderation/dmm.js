module.exports = {
    name: 'dmm',
    permissions: ["KICK_MEMBERS"],
    description: "this sends help!",
    aliases: [],
    async execute(client, message, cmd, args, Discord) {

        let user = message.mentions.users.first()

        if (!user) return message.reply("Please mention a user to DM!")

        let dm = args.slice(1).join(" ")
        if (!dm) return message.reply("I can`t DM an empty message.")

        const dmEmbed = new Discord.MessageEmbed() 
            .setColor('#2C2F33')
            .setTitle(`**TONE!**`)
            .setDescription(`\`\`\`${dm}\`\`\``)

        try {
            await 
            //user.send(`${message.author}`)
            user.send({ embeds: [dmEmbed] })
        } catch (error) {
            return message.reply("This user have DMs closed i can`t DM the person!")
        }
        message.channel.send("Succesfully DM a user!")

        //message.delete();
    }
}