const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async => {
  console.log(`${bot.user.usename} is online!`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") message.reply("Kyaa~! Don't scare me!");

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

// End of Header

// Travel
  let user = message.guild.member(message.author);
  let hq = message.guild.roles.find(role => role.name === "HQ");
  let dorm = message.guild.roles.find(role => role.name === "Dormitory");
  let hotspring = message.guild.roles.find(role => role.name === "Hot-Springs");
  let docks = message.guild.roles.find(role => role.name === "Docks");
  let park = message.guild.roles.find(role => role.name === "Park");
  let tchannel = message.guild.channels.find(role => role.name === "travel-channel");

// HQ
  if(cmd === `${prefix}hq`) {
  await(user.addRole(hq.id));
  await(user.removeRole(dorm.id));
  await(user.removeRole(hotspring.id));
  await(user.removeRole(docks.id));
  await(user.removeRole(park.id));
  tchannel.send(`*${message.author} went to the Headquarters!*`);
  message.delete().catch(O_o=>{});
  }
  if(cmd === `${prefix}office`) {
  await(user.addRole(hq.id));
  await(user.removeRole(dorm.id));
  await(user.removeRole(hotspring.id));
  await(user.removeRole(docks.id));
  await(user.removeRole(park.id));
  tchannel.send(`*${message.author} went to the Headquarters!*`);
  message.delete().catch(O_o=>{});
  }
// Dormitory
  if(cmd === `${prefix}dorm`) {
  await(user.addRole(dorm.id));
  await(user.removeRole(hq.id));
  await(user.removeRole(hotspring.id));
  await(user.removeRole(docks.id));
  await(user.removeRole(park.id));
  tchannel.send(`*${message.author} went to the Dormitory!*`);
  message.delete().catch(O_o=>{});
  }
  if(cmd === `${prefix}dorms`) {
  await(user.addRole(dorm.id));
  await(user.removeRole(hq.id));
  await(user.removeRole(hotspring.id));
  await(user.removeRole(docks.id));
  await(user.removeRole(park.id));
  tchannel.send(`*${message.author} went to the Dormitory!*`);
  message.delete().catch(O_o=>{});
  }
// Hot Springs
  if(cmd === `${prefix}hotspring`) {
  await(user.addRole(hotspring.id));
  await(user.removeRole(hq.id));
  await(user.removeRole(dorm.id));
  await(user.removeRole(docks.id));
  await(user.removeRole(park.id));
  tchannel.send(`*${message.author} went to the Hot Springs*!`);
  message.delete().catch(O_o=>{});
  }
  if(cmd === `${prefix}hotsprings`) {
  await(user.addRole(hotspring.id));
  await(user.removeRole(hq.id));
  await(user.removeRole(dorm.id));
  await(user.removeRole(docks.id));
  await(user.removeRole(park.id));
  tchannel.send(`*${message.author} went to the Hot Springs!*`);
  message.delete().catch(O_o=>{});
  }
// Docks
  if(cmd === `${prefix}docks`) {
  await(user.addRole(docks.id));
  await(user.removeRole(hq.id));
  await(user.removeRole(hotspring.id));
  await(user.removeRole(dorm.id));
  await(user.removeRole(park.id));
  tchannel.send(`*${message.author} went to the Docks!*`);
  message.delete().catch(O_o=>{});
  }
  if(cmd === `${prefix}dock`) {
  await(user.addRole(docks.id));
  await(user.removeRole(hq.id));
  await(user.removeRole(hotspring.id));
  await(user.removeRole(dorm.id));
  await(user.removeRole(park.id));
  tchannel.send(`*${message.author} went to the Docks!*`);
  message.delete().catch(O_o=>{});

  }
// Park
  if(cmd === `${prefix}park`) {
  await(user.addRole(park.id));
  await(user.removeRole(hq.id));
  await(user.removeRole(hotspring.id));
  await(user.removeRole(dorm.id));
  await(user.removeRole(docks.id));
  tchannel.send(`*${message.author} went to the Park!*`);
  message.delete().catch(O_o=>{});
  }
// leave
  if(cmd === `${prefix}leave`) {
  await(user.removeRole(park.id));
  await(user.removeRole(hq.id));
  await(user.removeRole(hotspring.id));
  await(user.removeRole(dorm.id));
  await(user.removeRole(docks.id));
  tchannel.send(`*${message.author} probably went missing > u < !!*`);
  message.delete().catch(O_o=>{});
  }
// Travel help
  if(cmd === `${prefix}travel`) {

  let travellist = new Discord.RichEmbed()
  .setDescription("Here's a list of available commands to travel around the map.")
  .setAuthor( message.author.username, message.author.avatarURL)
  .setColor("#58e85c")
  .addField("Commands for Travel",
  "`!hq` - lets you travel to the Headquarters. \n`!dorm` - lets you travel to the Dormitory. \n`!hotspring` - lets you travel to the Hot Springs. \n`!docks` - lets you travel to the Docks. \n`!park` - lets you travel to the Park.")

  tchannel.send(travellist);
  tchannel.send(`${message.author} heres your commands~ desu!`);
  message.delete().catch(O_o=>{});
}
  if(cmd === `${prefix}traveldm`) {

  let travellist = new Discord.RichEmbed()
  .setDescription("Here's a list of available commands to travel around the map.")
  .setAuthor( message.author.username, message.author.avatarURL)
  .setColor("#58e85c")
  .addField("Commands for Travel",
  "`!hq` - lets you travel to the Headquarters. \n`!dorm` - lets you travel to the Dormitory. \n`!hotspring` - lets you travel to the Hot Springs. \n`!docks` - lets you travel to the Docks. \n`!park` - lets you travel to the Park.")

  message.author.send(travellist);
  message.channel.send("I sent you a DM! > u <");
  }
// End of Travel

// Extra stuff

  if(cmd === `${prefix}kawaii`) {
    let kawaiiembed = new Discord.RichEmbed()
    .setColor("#58e85c")
    .setImage("https://i.pinimg.com/originals/50/e7/b0/50e7b0b01dea7ee19dac287ab108ac02.gif")
    .setDescription(`${message.author.username}.. am i really? *(*ﾉωﾉ)*`)
  message.channel.send(kawaiiembed);
  }


});


bot.login(botconfig.token);
