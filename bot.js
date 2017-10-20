'use strict';
const BootBot = require('bootbot'),
      request = require('request'),
      config = require('config'),
      menu_persistente = require('./modules/menu_persistente'),
      menu_inicio = require('./modules/menu_inicio');

const bot = new BootBot({
  accessToken: config.get('accessToken'),
  verifyToken: config.get('verifyToken'),
  appSecret: config.get('appSecret')
});


bot.setGetStartedButton('INICIO'
).then(() => (
    bot.module(menu_persistente)
))

bot.module(menu_inicio);


bot.on('postback:ABRIR', (payload, chat) => {
    chat.say('Abriendo sistemas de gas', {typing:true
    }).then(() => (
        request.post('https://5ab396e5.ngrok.io/gasSystem/abrir')
        
    )).then(() => (
        chat.say('Sistemas de gas activados ;)')
    ))
})

bot.on('postback:CERRAR', (payload, chat) => {
    chat.say('Cerrando sistemas de gas', {typing:true
    }).then(() => (
        request.post('https://5ab396e5.ngrok.io/gasSystem/cerrar')
        
    )).then(() => (
        chat.say('Sistemas de gas desactivados')
    ))
})


var port = process.env.PORT
bot.start(port);