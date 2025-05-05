const TelegramBot = require('node-telegram-bot-api');

const token = "7530794316:AAEkC9hI678NQueD-bXIjAz-0HllyzBi30I";
const webAppUrl = "https://yqpo0e-188-243-182-244.ru.tuna.am";
const bot = new TelegramBot(token,{polling: true});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const text = msg.text;
    if (text === '/start') {
        await bot.sendMessage(chatId, "Нажмите ниже, чтобы зарегистрироваться!", {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Перейти к регистрации',web_app:{url:webAppUrl}}],
                ]
            }
        })
    }
});