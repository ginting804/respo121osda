module.exports = {
    name : 'depo',
    description : 'Done Commands',
    execute(message, args , Discord, MessageEmbed ){
        const newEmbed1 = new Discord.MessageEmbed()
        .setTitle("🌎 World : **KRNDEPO**")
        .setColor("RANDOM")
        .setDescription(`**Note :** \n⚠️ Put World Locks in donation box \n ⚠️ Write down your discord name \n ⚠️ Send Screenshot in <#${message.channel.id}>`)
        .setTimestamp()
        .setFooter('【👮】KRN STORE ADMIN');
            
            if(message.member.roles.cache.has('948804748109307914')) {
                message.channel.send(newEmbed1);
                message.delete();
            } else {
                message.channel.send('【❌】 Anda tidak mempunyai Role yang dibutuhkan.');
            }
       
        /*message.author.send("hello");/*
         /* message.channel.send(`Hello ${message.author.toString()}, and welcome!`);*/


    }



}