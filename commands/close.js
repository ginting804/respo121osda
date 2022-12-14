
module.exports = {
    name : 'close',
    description : 'Done Commands',
    execute(message, args , Discord, MessageEmbed){
     if (message.member.roles.cache.has('948804748109307914')){
        const embed = new Discord.MessageEmbed()
        .setTitle(message.guild.name)
        .setThumbnail(message.guild.iconURL())
        .setColor("RANDOM")
        .setDescription(`${message.guild.name} is **CLOSED** . Thanks For Buying. See You Tomorrow!`)
        .setTimestamp();
            message.channel.send(embed);
     
    } else{
        message.channel.send("❌ You don't have permission to use this commands!");
    }
  }



}