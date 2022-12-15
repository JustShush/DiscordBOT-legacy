module.exports = {
name: "avatar",
permissions: [],
description: "this sends help!",
aliases: ["avatar_info"],
async execute(client, message, cmd, args, Discord) {
    if (cmd === "avatar_info") {
    const infoEmbed = new Discord.MessageEmbed()
	    .setColor("#7e11dd")
	    .setTitle(`**${cmd}**`)
        .setDescription('Do: `+avatar @"the person you want is avatar"`')
        .setTimestamp();
    message.channel.send({ embeds: [infoEmbed] });
    } else {
    let mentionMember = message.mentions.members.first();
    if (!mentionMember) mentionMember = message.member;

    const avatarEmbed = new Discord.MessageEmbed()
    	.setTitle(mentionMember.user.username + "'s Avatar")
        .setImage(mentionMember.user.displayAvatarURL())
        .setFooter(`Requested by ` + message.author.username)
        .setTimestamp()
        .setColor("RANDOM");

    message.channel.send({ embeds: [avatarEmbed] });
    //message.delete();
    }
},
};
