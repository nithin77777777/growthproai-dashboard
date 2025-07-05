import express from 'express';
import cors from 'cors';
import headlines from './headlines.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/business-data', (req, res) => {
  const { name, location } = req.body;

  const response = {
    name,
    location,
    rating: (Math.random() * (5 - 3) + 3).toFixed(1),
    reviews: Math.floor(Math.random() * 300 + 50),
    headline: `“${name} is redefining quality for ${location} businesses”`
  };

  console.log(`[POST] /business-data → ${JSON.stringify(response)}`);

  res.json(response);
});

app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;
  const randomIndex = Math.floor(Math.random() * headlines.length);
  const headline = headlines[randomIndex]
    .replace('{name}', name)
    .replace('{location}', location);

  console.log(`[GET] /regenerate-headline → "${headline}" for ${name}, ${location}`);

  res.json({ headline });
});

app.listen(PORT, () => {
  console.log(`✅ Backend ready at http://localhost:${PORT}`);
});
