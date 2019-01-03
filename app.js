const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("We up");
});
client.on("message", (message) => {
  function change() {  
    let admins = message.guild.roles.get("509097329240834048");
    let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    admins.edit({color: random});
  }
    setInterval(() => { change(); }, 1200);
  });
client.login(process.env.BOT_TOKEN);
