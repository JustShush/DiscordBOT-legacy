const { Channel } = require("discord.js");

module.exports = {
    name: 'tt',
    permissions: [],
    description: "this sends help!",
    async execute(client, message, cmd, args, Discord) {
        let newUserChannel = newMember.channelID;
        let oldUserChannel = oldMember.channelID;
       
        if (newUserChannel === '601225675227267072') {
         console.log('joined');
         if (newMember.channel.name !== 'game') {
          await newMember.channel.setName('game');
         }
        } else if (oldUserChannel === '601225675227267072') {
         console.log('left');
         if (oldMember.channel.name !== 'shhh') {
          await oldMember.channel.setName('shhh');
         }
        }
       

    }

}