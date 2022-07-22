module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {

    // client.user.setPresence({
    //   status: "dnd",
    //   activities:[{
    //       name: "CESAR#3195",
    //       type: "LISTENING"
    //   }]
    // });
  
    console.log(`${client.user.username} est en ligne !`)
    // console.log(`${client.user.username} : En ligne sur ${client.guilds.cache.size} serveur(s) !`)

  }
}