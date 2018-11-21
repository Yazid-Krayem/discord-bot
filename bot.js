const Discord = require('discord.js');
const client = new Discord.Client()

client.on('ready',()=>{

    console.log('Connected as ' + client.user.tag)

    client.user.setActivity("Sako", {type:"sako"})
});

client.login('NTEyMzgyMjM3MTY2MjcyNTEy.Ds4pTA.20F3A88EJhXvSHrgF1Vt6Ii5irE')