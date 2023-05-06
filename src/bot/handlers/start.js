import { InlineKeyboard } from "grammy";

export default async function handleStart(ctx) {
  const menu = new InlineKeyboard()
    .text("CholloTon", "buy")
    .row()
    .url("Tambien puedes usar nuestra Web3.0", "https://cholloton.com");

  await ctx.reply(

    `Bienvenido a CholloTon!! Ahora puedes vender tus productos aqui y comprar todo lo que necesites!!
     Aceptamos pagos en TON, BTC, ETH, USDT(ERC20), EUR, USD, ...
     -----
     Welcome to CholloTon!! Now you can sell your products here and buy everything you need!!
     We accept payments in TON, BTC, ETH, USDT(ERC20), EUR, USD, ...`,

    { reply_markup: menu, parse_mode: "HTML" }
  );
}
