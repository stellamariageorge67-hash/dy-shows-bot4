import express from 'express';
import router from './router'; 
import { bot } from './bot';    
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  
  // The ONLY place the bot launches
  bot.launch()
    .then(() => console.log("Telegram Bot connection established!"))
    .catch((err) => console.error("Bot launch failed: ", err));
});
