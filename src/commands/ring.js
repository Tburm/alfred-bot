module.exports = {
  name: 'ring',
  description: 'Ring the doorbell',
  async execute(client, message) {
    const players = [
      'Michael Jordan',
      'Kobe Bryant',
      'Lebron James'
    ];

    response = ''
    for(const player of players) {
      response += player + '\n'
    }

    await message.channel.send(response);
  }
}
