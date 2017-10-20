'user strict';
module.exports = (bot) => {
    bot.on('postback:INICIO', (payload, chat) => {
        chat.say('Hola, quieres controlar los sistemas en tu casa?', {typing:true
        }).then(() => (
            chat.sendGenericTemplate([
                {
                    'title':'Sistema de Gas',
                    'image_url':'https://www.iconexperience.com/_img/g_collection_png/standard/512x512/fire.png',
                    'subtitle':'Puedo controlar el paso de los sistemas de gas natural ;)',
                    'buttons':[
                        {'type':'postback',
                            'title':'Abrir',
                            'payload':'ABRIR'},
                        {'type':'postback',
                            'title':'Cerrar',
                            'payload':'CERRAR'}
                    ]
                }
            ])
        ))
    })
}