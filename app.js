const Discord = require('discord.js');
var http = require('http');
require('dotenv').config();

// create the client and set a prefix
const client = new Discord.Client({
  partials: ['MESSAGE', 'REACTION', 'CHANNEL'],
});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
  require(`./src/handlers/${handler}`)(client, Discord);
})

client.login(process.env.BOT_TOKEN);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('We are LIVE');
}).listen(process.env.PORT, 'localhost');
