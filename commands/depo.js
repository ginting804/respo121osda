module.exports = {
    name : 'depo',
    description : 'Done Commands',
    execute(message, args , Discord, MessageEmbed ){
        const newEmbed1 = new Discord.MessageEmbed()
        .setTitle("ð World : **KRNDEPO**")
        .setColor("RANDOM")
        .setDescription(`**Note :** \nâ ï¸ Put World Locks in donation box \n â ï¸ Write down your discord name \n â ï¸ Send Screenshot in <#${message.channel.id}>`)
        .setTimestamp()
        .setFooter('ãð®ãKRN STORE ADMIN');
            
            if(message.member.roles.cache.has('948804748109307914')) {
                message.channel.send(newEmbed1);
                message.delete();
            } else {
                message.channel.send('ãâã Anda tidak mempunyai Role yang dibutuhkan.');
            }
       
        /*message.author.send("hello");/*
         /* message.channel.send(`Hello ${message.author.toString()}, and welcome!`);*/


    }



}