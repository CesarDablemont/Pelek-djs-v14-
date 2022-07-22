const fs = require('fs');

module.exports = client => {
	client.handleEvents = async () => {
		const eventFolders = fs.readdirSync(`./src/events`);
		for (const folder of eventFolders) {
			const eventFile = fs.readdirSync(`./src/events/${folder}`).filter(file => file.endsWith('.js'));

			switch (folder) {
				case 'client':
					for (const file of eventFile) {
						const event = require(`../../events/${folder}/${file}`);
						if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
						else event.on(event.name, (...args) => event.execute(...args, client));
					}
					break;

				default:
					break;
			}

			// const { commands, commandArray } = client;
			// for (const file of eventFile) {
			// 	const command = require(`../../commands/${folder}/${file}`);
			// 	commands.set(command.data.name, command);
			// 	commandArray.push(command, command.data.toJson());
			// }
			// console.log('Les Commandes sont chargée');
		}
	};
};
