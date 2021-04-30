module.exports = {
  name: 'ring',
  description: 'Ring the doorbell',
  async execute(client, message) {
    await message.channel.send('You rang?');
  }
}
