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
            .setDescription("โ **RULES** โ \nใ๐ฎ๐ฉใ **Indonesian**\n๐ Dilarang Berkata Kasar\n๐ Dilarang Menyebarkan Link\n๐ Dilarang Menyebarkan 18+\n๐ Dilarang Mencuri/Scam\n๐ Mengirim pesan sesuai dengan channel-nya masing-masing\n๐ Jika terscam di server ini, silahkan hubungi owner <@747651312664969257> \n๐ Dilarang menyebarkan aplikasi Auto ataupun aplikasi yang memiliki SAV.DAT **(AKAN DIBAN)**\n๐ Deskripsi Profilnya jangan ada tulisan CID/Create ID  **(AKAN DI BAN KETIKA KEDETECT)**\n\nใ๐ฌ๐งใ **English**\n๐ No Harsh Speech\n\๐ Do not share the \n๐ No Sharing 18+\n๐ No Stealing/Scam\n๐ Send messages according to their respective channels\n๐ If this server is scammed, please contact owner \<@747651312664969257>\n๐ Do not distribute Auto applications or applications that have SAV.DAT **(CAUSE BANNED)**\n๐ Change description profil e, don't put create id or cid **(CAUSE BANNED)**")
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
        message.channel.send("โ You don't have permission to use this commands!");
    }
    } 
  }