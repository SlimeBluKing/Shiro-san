const Discord = require("discord.js")
module.exports = {
    name: 'regole',
    aliases: [],
    category: 'Private',
    utilisation: '{prefix}regole',

    execute(client, message, args) {
        if(message.author.id === '444902161596284980'){
            const regole1 = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("Regolamento del server")
            const regole2 = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("**Regole generali**")
                .setDescription(
                    "Zeta’s Community cercherà di mentenere un’esperienza piacevole per tutti. Vogliamo che i membri si comportino in modo adeguato e di essere responsabili. Non tolleriamo che gli utenti provino a difendersi dal regolamento. Per evitare casini invitiamo a leggere il regolamento.\n" +
                    "\n" +
                    "`1` **RISPETTA GLI ALTRI**\n" +
                    "Tratta le persone come vorresti essere trattato. No insulti, provocazioni, razzismo, discriminazione, molestie, comportamenti tossici, flame, incitamento all’odio.\n" +
                    "Le bestemmie e le parolacce sono consentite, ma senza dare fastidio all’utenza.\n" +
                    "\n" + 
                    "`2` **RISPETTA IL TOS DI DISCORD**\n" +
                    "Consigliamo di leggere anche IL ToS di Discord.\n" +
                    "- TOS: https://discord.com/new/terms \n" + 
                    "- Linee Guida: https://discord.com/new/guidelines \n" +
                    "\n" +
                    "`3` **OFF-TOPIC**\n" + 
                    "Con Off-Topic si intende rispettare il tema di ogni canale. Ad esempio se devi parlare di Gaming, scrivi su <#886985293645905990>.\n" +
                    "\n" +
                    "`4` **RISPETTA LO STAFF**\n" +
                    "Rispettare sempre lo staff perché sono coloro che gestiscono e perdono tempo per mantenere il server.")
            const regole3 = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("**Regole comportamento**")
                .setDescription(
                    "`5` **USER PROFILE**\n"+
                    "Non usare immagini profilo o nickname inadeguati (insulti, bestemmie, nsfw).\n"+
                    "\n"+
                    "`6` **TOXIC**\n"+
                    "Non assumere comportamenti bannabili, tossici o da bambino.\n"+
                    "\n"+
                    "`7` **MINIMOD**\n"+
                    "Vietato fare il membro che appare come staff.\n"+
                    "\n"+
                    "`8` **PUBBLICAZIONE**\n"+
                    "Vietato pubblicare contenuti NSFW, gore, razziste, ect.\n"+
                    "\n"+
                    "`9` **VOCALI**\n"+
                    "Non dare fastidio nelle chat vocali. Se hai problemi scrivi in <#886985531173503057>.\n"+
                    "\n"+
                    "`10` **RAID**\n"+
                    "Vietato partecipare/promuovere raid contro di noi.\n"+
                    "\n"+
                    "`11` **MULTI-ACCOUNT**\n"+
                    "Vietato creare più account (staff escluso per testing).\n"+
                    "\n"+
                    "`12` **SPAM, FLOOD**\n"+
                    "Ogni forma di flood o spam è vietato (Discord, YouTube).\n"+
                    "Per Discord esistono le partnership.\n"+
                    "\n"+
                    "`13` **APERTURA DEI TICKETS**\n"+
                    "Vietato aprire un ticket senza motivo\n"+
                    "\n"+
                    "`14` **LINGUE**\n"+
                    "Le lingue supportate sono Italiano e Inglese.")
            const regole4 = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("**Provvedimenti**")
                .setDescription(
                    "`15` **WARN - MUTE - BAN**\n"+
                    "Le varie punizioni vengono date in base alla gravità.")
            const regole5 = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle("**Regole aggiuntive (non da prendere sul serio XD)**")
                .setDescription("Volete leggere queste regole? Guardate il file!\nConsigliato da All Zeta! ( •̀ ω •́ )✧\n[Regole di All Zeta](https://docs.google.com/document/d/14XsmPTYpNS-rdvdLYDZrBhYzZVkhU12MABTPqU8H-PI/edit?usp=sharing)")
                .setFooter("Le regole possono variare... quindi tienile d'occhio")

            message.channel.send(regole1)
            message.channel.send(regole2)
            message.channel.send(regole3)
            message.channel.send(regole4)
            message.channel.send(regole5)
        }
    },
};