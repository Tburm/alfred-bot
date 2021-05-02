const { db } = require('../cloud/firestore.js');

module.exports = {
  name: 'draw',
  description: 'Draw a number in the lottery',
  async execute(client, message) {
    const snapshot = await db.collection('picks').get();

    picks = [];
    pick_nums = [];
    snapshot.forEach((doc) => {
        picks.push({
          id: doc.id,
          pick: doc.data().pick
        });
        pick_nums.push(doc.data().pick);
    });
    if(picks.length === 0) {
      await message.channel.send('There are no picks for the current lottery.');
      return;
    }

    const winner = Math.floor((Math.random()*100) + 1);
    const winning_pick = Math.min(pick_nums.filter(function(v) {return v <= winner}));
    const winning_user = picks.filter(function(v) {return v.pick = winning_pick});

    if(winning_user.length === 1) {
      const winning_user_id = winning_user[0].id;
      await message.channel.send(`The winning number is ${winner}.\n<@${winning_user_id}> is the winner with a pick of ${winning_pick}`);
    } else{
      await message.channel.send(`The winning number is ${winner}.\nThis lottery did not have a winner. Better luck next time!`);
    }

    // delete the existing picks
    snapshot.forEach((doc) => {
      db.collection('picks').doc(doc.id).delete();
    });
  }
}
