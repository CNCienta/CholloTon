

export async function teleFonos(ctx) {

  await ctx.reply(

    'Bienvenido a CholloTon ' + ctx.from.first_name + '!! Ahora puedes vender tus productos y comprar todo lo que necesites aqui!! Aceptamos pagos en TON - BTC - ETH - USDT(ERC20) - EUR - USD'
    ,

    { reply_markup: menu, parse_mode: "HTML" }
  );

  const telefonos = ('/assets/telefonos.json');
  const prepareData = (body) => {
    const telefonos = JSON.parse(body).telefonos;
    return telefonos.filter((telefonos) => telefonos !== undefined)
     .map((telefonos) => `${telefonos.name} on ${telefonos.net}`)
     .join('\n\n');
   
   };

   if (msg.text() === telefonos) {
    return request(url, (err, resp, body) => {
     bot.sendMessage(msg.chat.id, prepareData(body));
     
    });


   

}

}