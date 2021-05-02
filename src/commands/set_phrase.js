const { db } = require('../cloud/firestore.js');

module.exports = {
  name: 'set_phrase',
  description: 'Allow a user to set a catchphrase',
  async execute(client, message, catchphrase) {
    const user = await db.collection('users').doc(message.author.id);

    await user.update({
      catchphrase: catchphrase
    });

    await message.channel.send('Your catchphrase has been saved');
  }
}
