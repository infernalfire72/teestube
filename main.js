const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();

client.on('ready', async () => {
	console.log('Logged in as ' + client.user.id);
});

client.commands = new Discord.Collection();
client.volume = 0.5;

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      const cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.commands.set(command, cmd);
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.on('message', async (message) => {
	if (message.author.bot)
		return;
	
	if (!message.content.startsWith(config.prefix))
		return;
	
	let split = message.content.split(' ');
	const command = split[0].slice(config.prefix.length);
	const params = split.slice(1);
  
	let cmd;
	if (client.commands.has(command))
    cmd = client.commands.get(command);
  
	if (cmd)
		await cmd.run(client, message, params);
});

loadCommands();

process.on('SIGINT', (code) => {
	console.log("Goodbye~");
	client.destroy();
	process.exit(0);
});

client.login(config.token);

function loadCommands () {
	const fs = require('fs');
	fs.readdir('./commands/', (err, files) => {
	  if (err) console.error(err);
	  console.log(`Loading a total of ${files.length} commands.`);
	  files.forEach(f => {
		const props = require(`./commands/${f}`);
		console.log(`Loading Command: ${props.help.name}.`);
		client.commands.set(props.help.name, props);
		if (props.help.aliases) {
			for (var alias of props.help.aliases) {
				client.commands.set(alias, props);
				console.log(`Alias Command: ${alias}.`);
			}
		}
	  });
	});
}