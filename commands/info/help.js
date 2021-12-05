const Discord = require('discord.js')

module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Info',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const fotine = message.client.commands.filter(x => x.category == 'Fotine').map((x) => x.name).join(', ');
            const info = message.client.commands.filter(x => x.category == 'Info').map((x) => x.name).join(', ');
            
            const helpembed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("**Ecco cosa il mio senpai mi ha insegnato**")
                .addField('Fotine per veri zetini', "```" + fotine + "```")
                .addField('Info', "```" + info + "```")
                .attachFiles('./assets/shiro-helo.png')
                .setImage('attachment://shiro-helo.png')

            message.channel.send(helpembed);
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - Non riesco a trovare il comando!`);

            const helpcembed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Informazioni sul comando")
                .addField("Nome", command.name, true)
                .addField("Categoria", command.category, true)
                .addField("Aliases", command.aliases.length < 1 ? 'None' : command.aliases.join(', '), true)
                .addField("Utilizzo", command.utilisation.replace('{prefix}', client.config.discord.prefix), true)

            message.channel.send(helpcembed);
        };
    },
};