const { db } = require('../cloud/firestore.js');

module.exports = {
  name: 'save_user',
  description: 'Save a user in firestore',
  async execute(client, message) {
    const userDoc = await db.collection('users').doc(message.author.id);

    await userDoc.set({
      username: message.author.username
    });

    await message.channel.send('This user has been saved');
  }
}
