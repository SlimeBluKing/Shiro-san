const Discord = require('discord.js');

module.exports = {
    name: 'alt+zeta',
    aliases: ["altzeta"],
    category: 'Fotine',
    utilisation: '{prefix}allzeta',

    execute(client, message) {
        const fastembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('**Tutorial - Come avviare GeForce Experience**')
            .setImage('https://i.imgur.com/wAAtvYQ.png')
        message.channel.send(fastembed)
    },
};