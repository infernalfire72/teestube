exports.run = async (client, message) => {
	var channel = message.member.voice.channel;
	
	if (channel) {
		const connection = await channel.join()
		
		const dispatcher = connection.play('./cock.mp3', {volume: client.volume});
		dispatcher.on('finish', () => {
			channel.leave();
			dispatcher.destroy();
		})
	}

};

exports.help = {
	name: 'cock'
};