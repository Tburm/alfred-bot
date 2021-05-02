const { db } = require('../cloud/firestore.js');

module.exports = {
  name: 'lottery',
  description: 'Get information about the current lottery',
  async execute(client, message) {
    const snapshot = await db.collection('picks').get();

    picks = [];
    snapshot.forEach((doc) => {
        picks.push({
          id: doc.id,
          pick: doc.data().pick
        });
    });
    if(picks.length === 0) {
      await message.channel.send('There are no picks for the current lottery.');
      return;
    }

    var response = 'The current picks are: ';
    picks.forEach((doc) => {
      response += doc.pick.toString() + ', ';
    });
    response = response.slice(0, -2);

    await message.channel.send(response);
  }
}
