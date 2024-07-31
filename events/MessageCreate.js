const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    once: false,
    async execute(message) {

        // Check if the message is from a guild
        if (message.author.bot) return;

        const messageChannel = message.guild.channels.cache.get("1268235589363175484");

        // Ensure the message is from the specified channel
        if (message.channel.id !== messageChannel.id) return;

        // Regular expression to match "https" or ".mp4" anywhere in the message
        const pattern = /https|\.mp4/;

        // Check if the message content matches the pattern
        if (pattern.test(message.content)) {
            // Do nothing :3
        } else {
            message.delete()
        }
    },
}
