module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Info',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`Ping : **${client.ws.ping}ms** !`);
    },
};