const Discord = require('discord.js');

module.exports = {
    name: 'mousedaveroprogamer',
    aliases: ["mouse"],
    category: 'Fotine',
    utilisation: '{prefix}trust',

    execute(client, message) {
        const magikembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('**MOUSE DA VERO PRO GAYMER**')
        .attachFiles('./assets/mouse.png')
        .setImage('attachment://mouse.png')
    message.channel.send(magikembed)
    },
};