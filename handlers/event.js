const {readdirSync} = require('fs');
const ascii = require('ascii-table')
let table = new ascii("Events");
table.setHeading('Event', ' Load status');
module.exports = (client) => {
    const events = readdirSync('./events').filter(file => file.endsWith('.js'));

    for (const file of events) {
        const event = require(`../events/${file}`);
        if(event){
            client.on(file.split(".")[0], event.bind(null, client));
            table.addRow(file,'✅')
        } else {
            table.addRow(file, '❌ -> Error on loading this file, pls go check it')
            continue;
        }
    };

    console.log(table.toString());    
}

