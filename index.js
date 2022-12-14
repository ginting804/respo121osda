const { prefix, developerID } = require("./config.json");
const Discord = require('discord.js');
const express = require('express');
const MessageEmbed = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('KRN SUPPORT is online!');
});

require('http').createServer((req, res) => res.end(`
 |-----------------------------------------|
 |              Informations               |
 |-----------------------------------------|
 |• Alive: 24/7                            |
 |-----------------------------------------|
 |• Author: KRN STORE#6969                 |
 |-----------------------------------------|
 |• Server: https://discord.gg/ddfHaBdRA6  |
 |-----------------------------------------|
 |• License: KRN STORE#6969                |
 |-----------------------------------------|
`)).listen(3000);

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split("/ +/");
    const command = args.shift().toLowerCase();

    if(command === 'done'){
        client.commands.get('done').execute(message, args, Discord);
    } else if (command === 'depo'){
        client.commands.get('depo').execute(message, args, Discord);

    }else if (command === 'rules'){
        client.commands.get('rules').execute(message, args, Discord);

    }else if (command === 'open'){
        client.commands.get('open').execute(message, args, Discord)

    } else if (command === 'link'){
        client.commands.get('link').execute(message, args, Discord)

    }else if (command === 'info'){
        client.commands.get('info').execute(message, args, Discord)

    }else if (command === 'help'){
        client.commands.get('help').execute(message, args, Discord)

    }else if (command === 'format'){
        client.commands.get('format').execute(message, args, Discord)
    }else if (command === 'close'){
        client.commands.get('close').execute(message, args, Discord)
    }

});
client.login(process.env.TOKEN);
