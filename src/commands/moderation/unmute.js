module.exports = {
    name: 'unmute',
    permissions: ["MANAGE_MESSAGES"],
    description: "This unmutes a member",
    execute(client, message, cmd, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Membro');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Dumbass got Muted!');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        } else{
            message.channel.send('Cant find that member!');
        }
    }
}