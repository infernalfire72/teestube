exports.run = async (client, message) => {
	var channel = message.member.voice.channel;
	
	if (channel) {
		await message.channel.send('eböar', {tts: true});
		const connection = await channel.join()
		
		const dispatcher = connection.play('./kiss.mp3', {volume: client.volume});
		dispatcher.on('finish', () => {
			channel.leave();
			dispatcher.destroy();
		})
	}
};

exports.help = {
	name: 'kisskiss'
};