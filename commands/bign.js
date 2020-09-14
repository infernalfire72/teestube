exports.run = async (client, message) => {
	const connection = client.voice.connections.find(c => c.channel.guild.id === message.guild.id);
	
	if (connection && connection.dispatcher) {
		connection.dispatcher.destroy();
		connection.channel.leave();
	}
};

exports.help = {
	name: 'bign',
	aliases: ['eböar']
};