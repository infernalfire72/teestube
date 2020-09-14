exports.run = async (client, message, args) => {
	var volume = parseInt(args[0]);
	if (!volume) volume = 0;
		
	volumeClamp = volume / 100.0;
	client.volume = volumeClamp;
	await message.channel.send(`Globale Lautstärke auf ${volume}% gesetzt`);
	
	const connection = client.voice.connections.find(c => c.channel.guild.id === message.guild.id);
	
	if (connection && connection.dispatcher)
		connection.dispatcher.setVolume(volumeClamp);
};

exports.help = {
	name: 'volume'
};