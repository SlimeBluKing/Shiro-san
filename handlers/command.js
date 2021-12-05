const {readdirSync} = require('fs');
const ascii = require('ascii-table')
let table = new ascii("Commands");
table.setHeading('Command', ' Load status');
module.exports = (client) => {
    readdirSync('./commands').forEach(dirs => {
        const commands = readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
        for (const file of commands) {
            try{
                const command = require(`../commands/${dirs}/${file}`);
            if(command.name){
                client.commands.set(command.name.toLowerCase(), command);
                table.addRow(file,'✅')
            } else {
                table.addRow(file, '❌ -> Error on loading this file, pls go check it')
                continue;
            }
            }catch (err) {
                table.addRow(file, `❌ -> ${err}`)
                continue;    
            }
            
        };
    });
    console.log(table.toString());    
}