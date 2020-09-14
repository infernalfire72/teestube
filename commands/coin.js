exports.run = async (client, message) => {
	await message.channel.send(Math.round(Math.random()) ? 'Kock' : 'Zahl');
};

exports.help = {
	name: 'coin'
};