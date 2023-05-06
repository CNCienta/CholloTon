import dotenv from "dotenv";
import { Bot, session } from "grammy";
import { conversations, createConversation } from "@grammyjs/conversations";
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import {startPaymentProcess,checkTransaction} from "./bot/handlers/payment.js";
import handleStart from "./bot/handlers/start.js";
import {teleFonos} from "./bot/handlers/telefonos.js";
import bodyParser from 'body-parser';



dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const url = 'http://localhost:3000/assets';

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/telefonos', (req, res) => {
  res.json(telefonos);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/'));
});

app.use('/assets', 
    express.static(path.join(__dirname, 
      'assets')));

  app.listen(3000, function () {
    console.log('CholloTon listening on port 3000!');
  });


async function runApp() {
  console.log("Lanzando CholloTon...");

  // Handler of all errors, in order to prevent the bot from stopping
  process.on("uncaughtException", function (exception) {
    console.log(exception);
  });

  // Initialize the bot
  const bot = new Bot(process.env.BOT_TOKEN);

  // Set the initial data of our session
  bot.use(session({ initial: () => ({ amount: 0, comment: "" }) }));
  // Install the conversation plugin
  bot.use(conversations());

  bot.use(createConversation(startPaymentProcess));

  // Register all handelrs
  bot.command("start", handleStart);
  bot.callbackQuery("buy", async (ctx) => {
    await ctx.conversation.enter("startPaymentProcess");
  });
  bot.callbackQuery("check_transaction", checkTransaction);

  // Register JSON
  bot.command("telefonos", teleFonos);
  
  // Start bot
  await bot.init();
  bot.start();
  console.info(`@${bot.botInfo.username} esta actualizado y funcionando`);
}

void runApp();
