const { Telegraf } = require("telegraf");
const TOKEN = "6750213592:AAG5KiG1wJfHT7n-W4tbgFqMIOO75q4GXQw";
const bot = new Telegraf(TOKEN);

const web_link = "https://chop-haven.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Welcome to Chop Haven", {
    reply_markup: {
      keyboard: [[{ text: "place your order", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
