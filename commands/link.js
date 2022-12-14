const Discord = require('discord.js');
const talkedRecently = new Set();
module.exports = {
    name : 'link',
    description : 'Done Commands',
    execute(client,message, args , Discord){
   if (message.member.roles.cache.has('948887576549425193')){
    if (talkedRecently.has(message.author.id)) {
            message.channel.send(`Wait 10 Seconds before getting typing this again. <@${message.author.id}>`);
    } else {
            message.channel.send("🔗 **PERMANENT LINK KRN STORE** :\n\n **https://discord.gg/ddfHaBdRA6**");
 // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 1000 * 10);
    }
     
    } else{
        message.channel.send("❌ You don't have permission to use this commands!");
    }
    }



}