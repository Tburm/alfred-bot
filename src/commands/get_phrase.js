const { db } = require('../cloud/firestore.js');

module.exports = {
  name: 'get_phrase',
  description: "Return the user's catchphrase",
  async execute(client, message) {
    const user = await db.collection('users').doc(message.author.id).get();

    await message.channel.send('Your catchphrase is ' + user.data().catchphrase);
  }
}
