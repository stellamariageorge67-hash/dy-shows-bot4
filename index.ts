import express from 'express';
import path from 'path';
import router from './router'; 
import { bot } from './bot';    
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());
app.use(express.static('.'));
app.use(router);

app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

// Start Server and then Start Bot
app.listen(PORT, '0.0.0.0', () => {
  console.log("-----------------------------------------");
  console.log("1. Server is live on port " + PORT);
  
  bot.launch()
    .then(() => {
      console.log("2. ✅ SUCCESS: Bot is connected to Telegram!");
      console.log("3. Waiting for messages... Try typing /start now.");
    })
    .catch((err) => {
      console.error("2. ❌ ERROR: Bot could not connect.");
      console.error("Check your BOT_TOKEN in Render settings.");
    });
});
