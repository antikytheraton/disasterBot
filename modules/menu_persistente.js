'use strict';
module.exports = (bot) => {
    bot.setPersistentMenu([
        {
            title:'Comenzar de nuevo',
            type:'postback',
            payload:'INICIO'
        }
    ])
}