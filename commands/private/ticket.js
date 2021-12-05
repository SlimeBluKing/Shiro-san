const Discord = require('discord.js');
const disbut = require("discord-buttons");

module.exports = {
    name: "ticket",
    aliases: ["tk"],
    category: "Secret",
    utilisation: '{prefix}ticket [partner/null]',

    async execute(client, message, args) {
        if (message.author.id === '444902161596284980'){
            if (args.join(" ").toLowerCase() === "partner"){
                const ticketdummy = new Discord.MessageEmbed()
                    .setColor("BLUE")
                    .setTitle("**RICHIESTA PARTNERSHIP**")
                    .setDescription('Vuoi fare partnership con noi? Bene!\nApri un ticket cliccando il pulsante.\n**N.B.**: prima di richiedere partnership leggi <#894089661830533151>')
                    .setFooter('Se non riesci ad aprire un ticket, contatta in dm lo staff')

                let button = new disbut.MessageButton()
                    .setLabel("🤝Richiedi partnership")
                    .setID("tk-partner")
                    .setStyle("green")

                message.channel.send(ticketdummy, button)
            } else {
                const ticketdummy = new Discord.MessageEmbed()
                    .setColor('BLUE')
                    .setTitle('**Vuoi ricevere assistenza?**')
                    .setDescription('Vuoi ricevere assistenza?\nApri un ticket cliccando il pulsante.')
                    .setFooter('Se non riesci ad aprire un ticket, contatta in dm lo staff')

                let button = new disbut.MessageButton()
                    .setLabel("🎟️Apri un ticket")
                    .setID("tk")
                    .setStyle("green");

                message.channel.send(ticketdummy, button);
            }
        }
    }
}

