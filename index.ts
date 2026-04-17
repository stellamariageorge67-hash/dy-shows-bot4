import express from 'express';
import path from 'path'; 
import router from './router'; 
import { bot } from './bot';    
import dotenv from 'dotenv';

dotenv.config();

const app = express();
// Render usually uses port 10000, but we use process.env.PORT to be safe
const PORT = process.env.PORT || 10000;

app.use(express.json());

// 1. SERVE STATIC FILES (This makes your website visible)
app.use(express.static('.')); 

app.use(router);

// 2. SERVE THE HOMEPAGE
app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

// 3. BIND TO 0.0.0.0 (Crucial for Render hosting)
app.listen(Number(PORT), '0.0.0.0', () => {
  console.log("-----------------------------------------");
  console.log(🚀 Server is running on port ${PORT});
  
  // Start the bot connection
  bot.launch()
    .then(() => {
      console.log("✅ SUCCESS: Bot is connected to Telegram!");
    })
    .catch((err) => {
      console.error("❌ ERROR: Bot connection failed:", err.message);
    });
});
