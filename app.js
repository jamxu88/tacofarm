const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("We up");
});
client.on("message", message => {
  function change() {
    jam.edit({color: random});
  }
  i = 0
  while (i < 1) {
    let jam = message.guild.roles.get("530156981542060043");
    let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    setTimeout(change, 2000);
  }
});
client.login(process.env.BOT_TOKEN);
