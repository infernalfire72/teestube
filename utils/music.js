function playSound(client, connection, resource) {
	const dispatcher = connection.play(resource, {volume: client.volume});
	dispatcher.on('finish', () => {
		connection.channel.leave();
		dispatcher.destroy();
	})
}

module.exports = {
	playSound
};