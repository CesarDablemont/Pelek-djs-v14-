const { SlashCommandBuilder } = require('discord.js');
const { execute } = require('../../events/client/ready');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Donne mon ping'),
  async execute(interaction, client) {

    const message = await interaction.deferReply({
      fetchReply: true
    });

    const msg = `Latence de l'API: ${client.ws.ping} \nLatence du bot: ${message.createdTimestamp - interaction.createdTimestamp}`;
    await interaction.editReply({
      cotent: msg
    });

  },
};
