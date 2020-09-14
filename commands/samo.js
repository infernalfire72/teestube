const { playSound } = require('../utils/music');

exports.run = async (client, message) => {
	var channel = message.member.voice.channel;
	
	if (channel) {
		await message.channel.send('true')
		
		const connection = await channel.join();
		playSound(client, connection, './samo.mp3');
	}
};

exports.help = {
	name: 'samo'
};