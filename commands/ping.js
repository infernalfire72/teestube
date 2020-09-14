exports.run = async (client, message, args) => {
	await message.channel.send(`Pong! Client Heartbeat is ${client.ws.ping}ms`);
};

exports.help = {
	name: "ping"
};