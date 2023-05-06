import { InlineKeyboard } from "grammy";


export default async function handleStart(ctx) {
  const menu = new InlineKeyboard()
    
    .url("CholloTon", "https://cholloton.com")
    .row()
    .text("Cars", "buy")
    .text("Home", "buy")
    .text("Home", "buy")
    .row()
    .text("Cars", "buy")
    .text("Home", "buy")
    .text("Home", "buy")
    .row()
    .text("Cars", "buy")
    .text("Home", "buy")
    .text("Home", "buy")
    .row()
    .text("Cars", "buy")
    .text("Home", "buy")
    .text("Home", "buy")
    .row()
    .text("Cars", "buy")
    .text("Home", "buy")
    .text("Home", "buy")
    .row()
    .text("Cars", "buy")
    .text("Home", "buy")
    .text("Home", "buy")
    .row()
    .text("Cars", "buy")
    .text("Home", "buy")
    .text("Home", "buy")
    .row()
    .text("Cars", "buy")
    .text("Home", "buy")
    .text("Home", "buy")
    .row()
    .text("Cars", "buy")
    .text("Home", "buy")
    .text("Home", "buy")
    .row()
    ;

    await ctx.replyWithPhoto(
    
      "https://github.com/CNCienta/CholloTon/blob/master/src/assets/test.png",
    
    );
    

  await ctx.reply(

    `Bienvenido a CholloTon!! Ahora puedes vender tus productos aqui y comprar todo lo que necesites!! Aceptamos pagos en TON, BTC, ETH, USDT(ERC20), EUR, USD, ...
    `,

    { reply_markup: menu, parse_mode: "HTML" }
  );
}
