const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = process.env.WEATHER_API_KEY;

app.get('/weather/:city', async (req, res) => {
  const city = req.params.city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(url);
    const { name, weather, main } = response.data;

    res.json({
      city: name,
      temperature: `${main.temp}°C`,
      description: weather[0].description,
      humidity: `${main.humidity}%`
    });
  } catch (error) {
    res.status(404).json({ error: "City not found or API error." });
  }
});

app.listen(PORT, () => console.log(`Weather API running on port ${PORT}`));
