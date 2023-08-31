const TelegramBot = require('node-telegram-bot-api');
const API_KEY_BOT = '6443133889:AAHBtsFmOKX4XvHk7_1y_NFxsM-opi4NEZ0';
const bot = new TelegramBot(API_KEY_BOT, {

    polling: true

});

bot.on('text', async msg => {

    try {

        if(msg.text === '/start') {

            await bot.sendMessage(msg.chat.id, `Вы запустили бота!`);

        }
        else {

            await bot.sendMessage(msg.chat.id, msg.text);

        }

    }
    catch(error) {

        console.log(error);

    }

})

