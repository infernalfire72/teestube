exports.run = async (client, message) => {
	await message.channel.send('Ping!');
};

exports.help = {
	name: 'pong'
};