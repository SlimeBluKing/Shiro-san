const Discord = require('discord.js');

module.exports = {
    name: 'allzeta',
    aliases: [],
    category: 'Fotine',
    utilisation: '{prefix}allzeta',

    execute(client, message) {
        const fastembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('**watashi ga zeta!!**')
        .attachFiles('./assets/allzeta.png')
        .setImage('attachment://allzeta.png')
    message.channel.send(fastembed)
    },
};