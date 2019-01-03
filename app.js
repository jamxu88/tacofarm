const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("We up");
});
client.on("message", (message) => {
  function change() {   
    let role = message.guild.roles.get("530156981542060043");
    let role2 = message.guild.roles.get("516392093854335018");
    let role3 = message.guild.roles.get("530167708361293864");
    let role4 = message.guild.roles.get("527684778905042944");
    let role5 = message.guild.roles.get("527684779659886592");
    let role6 = message.guild.roles.get("527684780049956875");
    let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    role.edit({color: random});
    role2.edit({color: random});
    role3.edit({color: random});
    role4.edit({color: random});
    role5.edit({color: random});
    role6.edit({color: random});
  }
  if (message.content.startsWith("<@530165753811304449>")) {
    setInterval(() => { change(); }, 1000);
  }else
  if (message.content.includes("rainbow")) {
    message.channel.send("no");
  }else
  if (message.content.startsWith("530165753811304449>>>")) {
    setTimeout(() => { console.log(process.exit(0)); }, 300);
  }
  });
client.login(process.env.BOT_TOKEN);
