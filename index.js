console.clear();
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
client.config = require('./utils/config');
client.emotes = client.config.emojis;
client.commands = new Discord.Collection();
require('discord-buttons')(client);
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
["event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
client.login(client.config.discord.token);