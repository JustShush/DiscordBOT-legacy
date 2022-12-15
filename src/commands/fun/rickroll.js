module.exports = {
  name: 'rickroll',
  permissions: [],
  description: "sends a link ",
  execute(client, message, cmd, args) {
    message.channel.send('http://tiny.cc/y8hiuz');
  }

}