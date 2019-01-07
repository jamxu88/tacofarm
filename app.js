const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("We up");
});
client.on("message", (message) => {
  console.log(message.author.id)
  function change() {   
    let role = message.guild.roles.get("527684781056458753");
    let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    role.edit({color: random});
  }
  if (message.content.startsWith("<@530165753811304449>")) {
    setInterval(() => { change(); }, 1000);
    setInterval(() => { change(); }, 1000);
    setInterval(() => { change(); }, 1000);
    setInterval(() => { change(); }, 1000);
    setInterval(() => { change(); }, 1000);
    setInterval(() => { change(); }, 1000);
    setInterval(() => { change(); }, 1000);
    setInterval(() => { change(); }, 1000);
  }else
  if (message.content.includes("rainbow")) {
    message.channel.send("no");
  }else
  if (message.content.startsWith("bot.client.<@530165753811304449>>>endProcess.cycle#3965")) {
    message.channel.send("Ending...");
    setTimeout(() => { console.log(process.exit(0)); }, 300);
  }
  });
client.login(process.env.BOT_TOKEN);
