const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Donne mon ping'),
  async execute(interaction, client) {

    interaction.reply({
      content: `Pong!`,
      ephemeral: true,
    });

  },
};
