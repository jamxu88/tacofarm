const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("We up");
});
client.on("message", (message) => {
  console.log(message.author.id)
  function change() {   
    let role = message.guild.roles.get("527684781056458753");
    role.edit({color: 10223871});
    role.edit({color: 9442301});
    role.edit({color: 8270329});
    role.edit({color: 7293430});
    role.edit({color: 6186482});
    role.edit({color: 5079535});
    role.edit({color: 3776746});
    role.edit({color: 2735079});
  }
  if (message.content.startsWith("<@530165753811304449>")) {
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
