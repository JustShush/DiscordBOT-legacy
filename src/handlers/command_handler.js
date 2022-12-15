const fs = require('fs')

module.exports = (client) => {
    const load_dir = (dir) => {
        try {
            const command_files = fs
                .readdirSync(`src/commands/${dir}`)
                .filter(file => file.endsWith('.js'));

            for (const file of command_files) {
                const command = require(`../commands/${dir}/${file}`);
                if (command.name) {
                    client.commands.set(command.name, command);
                } else {
                    continue;
                }
            }
        } catch (e) {
            console.log(String(e.stack));
        }
    }

    //Load Files that arent in a sub folder
    load_dir('')

    const command_dirs = fs
        .readdirSync('src/commands')
        .filter(dir => fs.lstatSync(`src/commands/${dir}`).isDirectory())

    command_dirs.forEach(x => load_dir(x))
}