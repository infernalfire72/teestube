const { playSound } = require('./utils/music');

exports.run = async (client, message) => {
	var channel = message.member.voice.channel;
	
	if (channel) {
		const connection = await channel.join();
		playSound(client, connection, './cock.mp3');
	}

};

exports.help = {
	name: 'cock'
};