const Discord = require('discord.js');
const talkedRecently = new Set();
module.exports = {
    name : 'info',
    description : 'Done Commands',
    execute(message, args , Discord){
  if (message.member.roles.cache.has('948887576549425193')){
    if (talkedRecently.has(message.author.id)) {
            message.channel.send(`Wait 10 Seconds before getting typing this again. <@${message.author.id}>`);
    } else {
        const embed = new Discord.MessageEmbed()
        .setTitle(message.guild.name)
        .setThumbnail(message.guild.iconURL())
        .setColor("RANDOM")
        .setDescription(`This store already **Verified**\nSo it's safe to transaction here!`)
        .setTimestamp();
        message.channel.send(embed)
      // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 1000 * 10);
    }
      
    } else {
        message.channel.send("❌ You don't have permission to use this commands!");
    }


    }



}