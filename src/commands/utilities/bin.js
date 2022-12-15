module.exports = {
    name: 'bin',
    permissions: [],
    description: "this sends the link to share code.",
    execute(client, message, cmd, args, Discord) {
        
        message.reply('Please share your source code using https://srcshare.io/.');
    }

} 