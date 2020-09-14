const { playSound } = require('../utils/music');
const ytdl = require('ytdl-core');

exports.run = async (client, message, args) => {
	var channel = message.member.voice.channel;
	
	if (channel) {
		const connection = await channel.join()
		const item = ytdl(args[0], { filter: 'audioonly' });
		
		playSound(client, connection, item);
	}
};

exports.help = {
	name: 'yt'
};