const { playSound } = require('../utils/music');

exports.run = async (client, message) => {
	var channel = message.member.voice.channel;
	
	if (channel) {
		await message.channel.send('eböar', {tts: true});
		const connection = await channel.join();
		
		playSound(client, connection, './kiss.mp3');
	}
};

exports.help = {
	name: 'kisskiss'
};