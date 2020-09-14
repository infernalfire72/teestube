exports.run = async (client, message, args) => {
	if (message.author.id == '347459855449325570')
		eval(args.join(' '));
};

exports.help = {
	name: "eval"
};