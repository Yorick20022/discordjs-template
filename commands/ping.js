const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Funny ping command'),
    async execute(interaction) {
        interaction.reply("pong!")
    }
};
