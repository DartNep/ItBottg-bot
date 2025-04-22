const TelegramBot = require('node-telegram-bot-api');

const token = "7530794316:AAEkC9hI678NQueD-bXIjAz-0HllyzBi30I";
const webAppUrl = "";
const bot = new TelegramBot(token,{polling: true});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    if (text === '/start') {
        await bot.sendMessage(chatId, "Нажмите ниже, чтобы зарегистрироваться!", {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Перейти к регистрации',web_app:{url:webAppUrl+'/form1'}}],
                ]
            }
        })
    }
});