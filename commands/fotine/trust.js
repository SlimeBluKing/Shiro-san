const Discord = require('discord.js');

module.exports = {
    name: 'trust',
    aliases: [],
    category: 'Fotine',
    utilisation: '{prefix}trust',

    execute(client, message) {
        const magikembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('**TRUST BEST PERIFERICHE PER IL GAYMING**')
        .attachFiles('./assets/trust.png')
        .setImage('attachment://trust.png')
    message.channel.send(magikembed)
    },
};