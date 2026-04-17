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

app.listen(Number(PORT), '0.0.0.0', () => {
  console.log("-----------------------------------------");
  console.log("Server running on port: " + PORT);
  
  bot.launch()
    .then(() => {
      console.log("Bot connection successful");
    })
    .catch((err) => {
      console.error("Bot connection failed: " + err.message);
    });
});
