const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("542765482428727309")
setInterval(function() {
channel.send(`hla hla hla hla`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
