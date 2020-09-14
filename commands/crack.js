exports.run = async (client, message) => {
	var channel = message.member.voice.channel;
	
	if (channel) {
		const connection = await channel.join()
		
		const dispatcher = connection.play('./alpen.mp3');
		dispatcher.on('end', () => {
			channel.leave();
			dispatch.destroy();
		})
	}

};

exports.help = {
	name: 'crack'
};