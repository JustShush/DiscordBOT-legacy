const ms = require("ms");
module.exports = {
  name: "timeout",
  permissions: ["MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS"],
  description: "This times out a member",
  execute(client, message, cmd, args) {
    const target = message.mentions.users.first();
    if (target) {
      let memberTarget = message.guild.members.cache.get(target.id);

      if (!args[1]) {
        memberTarget.timeout(5 * 60 * 1000, args[2]);
        message.channel.send(`<@${memberTarget.user.id}> has been timeed out!`);
        return;
      }
      memberTarget.timeout(args[1] * 60 * 1000, args[2]);
      if (args[2]) {
        message.channel.send(
          `<@${memberTarget.user.id}> has been timed out for ${args[1]} min. For the reason: ${args[2]}`
        );
      } else {
        message.channel.send(
          `<@${memberTarget.user.id}> has been timed out for ${args[1]} min.`
        );
      }
    } else {
      message.channel.send(
        "You need to mention a member! Like:\n`+timeout @user`"
      );
    }
  },
};
