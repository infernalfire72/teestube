const ytdl = require('ytdl-core');

exports.run = async (client, message, args) => {
	var channel = message.member.voice.channel;
	
	if (channel) {
		const connection = await channel.join()
		
		const item = ytdl(args[0], { filter: 'audioonly' });
		const dispatcher = connection.play(item, {volume: client.volume});
		dispatcher.on('finish', () => {
			channel.leave();
			dispatcher.destroy();
		})
	}
};

exports.help = {
	name: 'yt'
};