const Discord = require('discord.js');
const Twit = require('twit');
require('dotenv').config();

const client = new Discord.Client({
  partials: ['MESSAGE', 'REACTION', 'CHANNEL'],
});

client.login(process.env.BOT_TOKEN);

client.on('ready', () => console.log('The Bot is ready!'));

// Adding a response
client.on('message', (msg) => {
  if (msg.content === 'Alfred?') {
    msg.channel.send('Yes?');
  }
});
