const Discord = require('discord.js');
const client = new Discord.Client()
client.on('ready', function() {
    console.log(client.user.username);
});

client.on('message', (message) => {
    if (message.content.startsWith("startfarminghereplsthx")) { 
      message.delete();
      var interval = setInterval (function () {
      	message.channel.send("_ _")
          .then(msg => {
            msg.delete(10)
        })
      }, 62000);
   }
});
client.login(process.env.BOT_TOKEN);
