exports.run = async (client, message) => {
	var channel = message.member.voice.channel;
	
	if (channel) {
		await message.channel.send('true')
		
		const connection = await channel.join();
		playSound(client, connection, './samo.mp3');
	}
};

function playSound(client, connection, resource) {
	const dispatcher = connection.play(resource, {volume: client.volume});
	dispatcher.on('finish', () => {
		connection.channel.leave();
		dispatcher.destroy();
	})
}

exports.help = {
	name: 'samo'
};