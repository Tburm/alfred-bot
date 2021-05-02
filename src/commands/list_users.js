const { db } = require('../cloud/firestore.js');

module.exports = {
  name: 'list_users',
  description: 'List the collections in firestore',
  async execute(client, message) {
    const snapshot = await db.collection('users').get();

    response = '';
    snapshot.forEach((doc) => {
      response += doc.id + ': ' + doc.data().username + '\n';
    });

    if(response != '') {
      await message.channel.send(response);
    } else {
      response = 'There are no users';
      await message.channel.send(response);
    }
  }
}
