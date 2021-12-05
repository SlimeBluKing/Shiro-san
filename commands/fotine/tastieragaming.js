const Discord = require('discord.js');

module.exports = {
    name: 'tastieradaveroprogamer',
    aliases: ["tastiera"],
    category: 'Fotine',
    utilisation: '{prefix}trust',

    execute(client, message) {
        const magikembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('**TASTIERA DA VERO PRO GAYMER**')
        .attachFiles('./assets/tastiera.png')
        .setImage('attachment://tastiera.png')
    message.channel.send(magikembed)
    },
};