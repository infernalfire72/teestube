function playSound(client, connection, resource) {
	const dispatcher = connection.play(resource);
	dispatcher.on('finish', () => {
		connection.channel.leave();
		dispatcher.destroy();
	});
	dispatcher.setVolume(client.volume);
}

module.exports = {
	playSound
};