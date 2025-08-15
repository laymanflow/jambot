const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rec')
		.setDescription('Recommend an album to your friends!'),
	async execute(interaction) {
		await interaction.reply('Here\'s your recommendation!');
	},
};