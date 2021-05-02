const { db } = require('../cloud/firestore.js');

module.exports = {
  name: 'pick',
  description: 'Pick a number for the upcoming lottery',
  async execute(client, message, args) {
    if(args.length != 1) {
      await message.channel.send('You must pick a number between 1 and 100.');
      return;
    } else if (isNaN(parseInt(args[0]))) {
      await message.channel.send('Your pick must be an integer.');
      return;
    } else if (args[0] < 1 || args[0] > 100) {
      await message.channel.send('Your pick must be between 1 and 100 ');
      return;
    } else {
      const pick = parseInt(args[0]);
      const snapshot = await db.collection('picks').get();

      const past_picks = [];
      snapshot.forEach((doc) => {
          past_picks.push(doc.pick);
      });

      if(past_picks.includes(pick)) {
        await message.channel.send('This number has been picked by another user.');
        return;
      } else {
        const user_pick = await db.collection('picks').doc(message.author.id);
        await user_pick.set({
          pick: pick
        });
        await message.channel.send(`Your pick of ${pick} has been logged.`);
        return;
      }
    }
  }
}
