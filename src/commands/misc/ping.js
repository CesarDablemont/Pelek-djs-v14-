const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Donne mon ping'),
  async execute(interaction, client) {

    const message = await interaction.reply({
      content: `Pong!`,
      ephemeral: true,
    });

  },
};
