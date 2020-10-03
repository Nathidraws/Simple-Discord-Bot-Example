const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})


bot_secret_token = "Put Token Here"

client.login(bot_secret_token)