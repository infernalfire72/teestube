exports.run = async (client, message) => {
	const url = 'https://cdn.discordapp.com/attachments/647100049288855582/754785694827675778/I_love_Pakistan_neu.mp3';
	
	var channel = message.member.voice.channel;
	
	if (channel) {
		const connection = await channel.join()
		
		const dispatcher = connection.play(url, {volume: client.volume});
		dispatcher.on('finish', () => {
			channel.leave();
			dispatcher.destroy();
		})
	}
};

exports.help = {
	name: 'pakistan'
};