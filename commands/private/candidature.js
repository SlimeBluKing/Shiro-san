const Discord = require("discord.js")
module.exports = {
    name: 'candidature',
    aliases: [],
    category: 'Private',
    utilisation: '{prefix}candidature',

    execute(client, message, args) {
        if(message.author.id === '444902161596284980'){
            const candidature1 = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("Candidature per diventare staffer")
            const candidature2 = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("**Requisiti**")
                .setDescription(
                    "Se vuoi aiutare a moderare Zeta’s Community compila questo form. Se verrai accettato <@444902161596284980>(o uno staffer quando <@444902161596284980> non sarà disponibile) ti contatterà in privato. Ci sono dei requisiti da rispettare per diventare staff.\n" +
                    "\n" +
                    "`1` **AVERE ALMENO 16 ANNI**\n" +
                    "Va bene se gli compi tra poco (2 settimane).\n" +
                    "\n" + 
                    "`2` **NON ESSERE MOD IN ALTRI SERVER**\n" +
                    "Lo so che è un requisito molto pesante, non è perché vogliamo rompere i coglioni ma è per non far interferire il ruolo di staff di un server con il nostro ruolo di staff per evitare che si faccia confusione, per dedicare meglio il tempo nello staff, vogliamo garantire il miglior servizio possibile alle persone, meglio poche cose fatte bene piuttosto che tante ma fatte di fretta o in modo incompleto.\n" +
                    "\n" +
                    "`3` **ESSERE ATTIVI**\n" + 
                    "Essere attivi è importante per garantire una sicurezza nel server.\n" +
                    "\n" +
                    "`4` **NON AVERE VIOLAZIONI**\n" +
                    "Per essere staff non devi avere warn per violazioni del regolamento.\n" +
                    "\n" +
                    "`4` **ESSERE EDUCATI**\n" +
                    "Essere educati con i membri sia dello staff ma soprattutto per i follower perché è per loro che si lavora, è per questo che ci sono gli staff a garantire un ambiente confortevole e pulito.\n" +
                    "\n" +
                    "`5` **PREGARE ALL ZETA (non prendetela sul serio XD)**\n" +
                    "Requisito **fondamentale** sennò ti picchia")
            const candidature3 = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("**Form per le candidature**")
                .setDescription("Ecco il form delle candidature! ( •̀ ω •́ )✧\n[Form candidature Zeta's Community](https://forms.gle/4cpLuWJGZzPe8J187)")

            message.channel.send(candidature1)
            message.channel.send(candidature2)
            message.channel.send(candidature3)
        }
    },
};