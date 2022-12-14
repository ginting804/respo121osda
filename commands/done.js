module.exports = {
    name : 'done',
    description : 'Done Commands',
    execute(message, args , Discord, MessageEmbed )
    {
        const newEmbed1 = new Discord.MessageEmbed()
        .setTitle("✅ Transaction Completed")
        .setColor("RANDOM")
        .setDescription(`Thanks for buying. Please reps in <#950091474157047888>`)
        .setTimestamp()
        .setFooter('👮 KRN STORE');
            
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