import { InlineKeyboard } from "grammy";


export default async function handleStart(ctx) {
  const menu = new InlineKeyboard()

    .url("CholloTon", "https://cholloton.com")
    .row()
    .text("TELÉFONOS", "telefonos")
    .text("JOYERÍA", "buy")
    .text("INFORMÁTICA", "buy")
    .row()
    .text("VIDEOJUEGOS", "buy")
    .text("FOTOGRAFÍA", "buy")
    .text("RELOJES", "buy")
    .row()
    .text("SONIDO", "buy")
    .text("TV", "buy")
    .text("INSTRUMENTOS", "buy")
    .row()
    .text("BRICOLAJE", "buy")
    .text("DEPORTES", "buy")
    .text("MÚSICA", "buy")
    .row()
    .text("ELECTRODOMÉSTICOS", "buy")
    .text("GAFAS", "buy")
    .text("BEBÉ", "buy")
    .row()
    .text("HOGAR", "buy")
    .text("LIBROS", "buy")
    .text("CD", "buy")
    .row()
    .text("CINE", "buy")
    .text("ACCESORIOS", "buy")
    .text("CONSOLAS", "buy")
    .row()
    .text("VIDEOCÁMARAS", "buy")
    .text("JUGUETES", "buy")
    .text("VÍDEO", "buy")
    .row()
    .text("COMPLEMENTOS", "buy")
    .text("CÓMICS", "buy")
    .text("REVISTAS", "buy")
    .row()
    .text("PELÍCULAS", "buy")
    .text("DVD", "buy")
    .text("CONSUMIBLES", "buy")
    .row()
    .text("CASETES", "buy")
    .text("VINILOS", "buy")
    .text("MUEBLES", "buy")
    .row()
    ;

    await ctx.replyWithPhoto(
    
      "https://github.com/CNCienta/CholloTon/blob/master/src/assets/test.png",
    
    );

  await ctx.reply(

    'Bienvenido a CholloTon ' + ctx.from.first_name + '!! Ahora puedes vender tus productos y comprar todo lo que necesites aqui!! Aceptamos pagos en TON - BTC - ETH - USDT(ERC20) - EUR - USD'
    ,

    { reply_markup: menu, parse_mode: "HTML" }
  );
}
