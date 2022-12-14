const Discord = require('discord.js');
const cooldowns = new Discord.Collection();
const talkedRecently = new Set();
module.exports = {
    name : 'help',
    description : 'Done Commands',
    execute(message, args , Discord, cooldowns){
if (message.member.roles.cache.has('948887576549425193')){
   if (talkedRecently.has(message.author.id)) {
            message.channel.send(`Wait 10 Seconds before getting typing this again. <@${message.author.id}>`);
    } else {

           message.channel.send("⚔️ **KRN STORE SUPPORT** ⚔️\n\n★ **krn!help** - Commands to show All Commands\n★ **krn!info** - Commands to show Info Server\n★ **krn!rules** - Commands to show All Rules\n★ **krn!link** - Commands for show link invite discord server\n★ **krn!open** - Commands for opening store\n★ **krn!depo** - Commands for show depo world\n★ **krn!done** - Commands for show done embed\n★ **krn!format** - Commands for show format embed\n★ **krn!close** - Commands for closing store\n```Type the commands without star in front of commands!```");

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