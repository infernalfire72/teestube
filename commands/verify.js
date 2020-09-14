exports.run = async (client, message) => {
	if (message.channel.name != 'verifizieren')
		return;
	
	const role = message.guild.roles.cache.find(r => r.name == 'Teeliebhaber');
	message.member.roles.add(role);
	
	const mainChannel = await message.guild.channels.resolve('754451527128580116');
	await mainChannel.send(`<:tee:754484048600236042> PogU ${message.author} ist jetzt ein Gang Member\r\nInsgesamt sind es nun ${message.guild.memberCount}.`);
}

exports.help = {
	name: 'verify'
};