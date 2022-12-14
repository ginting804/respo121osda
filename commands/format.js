module.exports = {
  name: 'format',
  description: 'Done Commands',
  execute(message, args, Discord) {
    const format = new Discord.MessageEmbed()
      .setColor('#304281')
      .addFields(
        { name: "🇮🇩\n", value: `【⚠️】PERHATIAN!\n➤ Password Harus Lebih dari 8 Karakter\n➤ Password Harus Ada Tanda Khusus (Contoh : !@#$%^^&*)\n➤ GrowID Belum Perenah Terbuat\n➤ Jika ada kesalahan dari Buyer **NO REFFUND**` },
        { name: "\n🇬🇧", value: `【⚠️】PERHATIAN!\n➤ Password Must Be More Than 8 Characters\n➤ Password Must Have a Special Sign (Example : !@#$%^^&*)\n➤ GrowID Has Never Been Made\n➤ If there is an error from the Buyer **NO REFFUND**` }
      )
      .setFooter('【👮】KRN STORE ADMIN');

    if (message.member.roles.cache.has('948804748109307914')) {
      message.channel.send(`**GrowId** : \n**Password** : \n**Email** : \n**Beli Apa?/Buy What?** : \n**Berapa Akun/How Many Account** : `);
      message.channel.send(format);
      message.delete();
    } else {
      message.channel.send('【❌】 Anda tidak mempunyai Role yang dibutuhkan.');
    }

    /*message.author.send("hello");/*
     /* message.channel.send(`Hello ${message.author.toString()}, and welcome!`);*/


  }



}