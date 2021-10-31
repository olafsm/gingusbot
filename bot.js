const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const fs = require('fs')

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on('message', async msg => {
    for(let key of keys) {
        let contains = true
        for(let word of key.keywords) {
            if(!msg.content.toLowerCase().includes(word)){
                contains = false
            }
        }
        if(contains){
            msg.reply(key.message)
        }
    }
    if(msg.content.startsWith("!hello")) {
        msg.reply("world!")
    }
})
let messages = {
    notlive: "Buddha will not be live today"
}
let keys = [{
        keywords:["buddha", "live", "today"], 
        message:"Buddha will not be live today"
    }]
raw = fs.readFileSync('auth.json');
auth = JSON.parse(raw)
client.login(auth.token);
