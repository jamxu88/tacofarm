const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("We up");
});
client.on("message", (message) => {
  function change() {  
    let role = message.guild.roles.get("530156981542060043");
    let role2 = message.guild.roles.get("516392093854335018");
    let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    role.edit({color: random});
    role2.edit({color: random});
  }
    setInterval(() => { change(); }, 1200);
  });
client.login(process.env.BOT_TOKEN);
