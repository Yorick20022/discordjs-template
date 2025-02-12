import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';


export const data = new SlashCommandBuilder()
    .setName('hello')
    .setDescription("Greeting message")
export async function execute(interaction: ChatInputCommandInteraction) {
    interaction.reply("Hello World!")
}
