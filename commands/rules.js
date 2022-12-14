const Discord = require('discord.js');
const talkedRecently = new Set();
module.exports = {
    name : 'rules',
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
            .setDescription("✅ **RULES** ✅ \n【🇮🇩】 **Indonesian**\n📌 Dilarang Berkata Kasar\n📌 Dilarang Menyebarkan Link\n📌 Dilarang Menyebarkan 18+\n📌 Dilarang Mencuri/Scam\n📌 Mengirim pesan sesuai dengan channel-nya masing-masing\n📌 Jika terscam di server ini, silahkan hubungi owner <@747651312664969257> \n📌 Dilarang menyebarkan aplikasi Auto ataupun aplikasi yang memiliki SAV.DAT **(AKAN DIBAN)**\n📌 Deskripsi Profilnya jangan ada tulisan CID/Create ID  **(AKAN DI BAN KETIKA KEDETECT)**\n\n【🇬🇧】 **English**\n📌 No Harsh Speech\n\📌 Do not share the \n📌 No Sharing 18+\n📌 No Stealing/Scam\n📌 Send messages according to their respective channels\n📌 If this server is scammed, please contact owner \<@747651312664969257>\n📌 Do not distribute Auto applications or applications that have SAV.DAT **(CAUSE BANNED)**\n📌 Change description profil e, don't put create id or cid **(CAUSE BANNED)**")
            .setTimestamp();
            message.channel.send(embed)
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