const Discord = require('discord.js');
var http = require('http');
require('dotenv').config();

const client = new Discord.Client({
  partials: ['MESSAGE', 'REACTION', 'CHANNEL'],
});

client.on('ready', () => {
    console.log('The Bot is ready!')
});

// A simple response
client.on('message', (msg) => {
  if (msg.content === 'Alfred?') {
    msg.channel.send('Yes?');
  }
});

client.login(process.env.BOT_TOKEN);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('We are LIVE');
}).listen(process.env.PORT, 'localhost');
