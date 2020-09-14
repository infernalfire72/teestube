const { MessageEmbed } = require('discord.js');

exports.run = async (client, message) => {
	const embed = new MessageEmbed()
		.setTitle(message.guild.name)
		.setThumbnail(message.guild.iconURL())
		.setColor(0x0088FF)
		.addField("Server ID", message.guild.id)
		.addField("Owner", message.guild.owner)
		.addField("Server Region", message.guild.region)
		.addField("Erstelldatum", message.guild.createdAt)
		.addField("Member", message.guild.memberCount);
		
	await message.channel.send(embed);
};

exports.help = {
	name: 'info'
};