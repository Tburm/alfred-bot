module.exports = {
  name: 'list_players',
  description: 'List a static set of players',
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
