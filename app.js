const Discord = require('discord.js');
const client = new Discord.Client()
client.on('ready', function() {
    console.log(client.user.username);
});

client.on('message', (message) => {
    if (message.content.startsWith("startfarminghereplsthx")) { 
      var interval = setInterval (function () {
      	message.channel.send("_ _")
      	message.delete()
      }, 60000);
   }
});
client.login(process.env.BOT_TOKEN);
