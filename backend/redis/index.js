const express = require("express");

const app = express();
const PORT = 3000;

// Open-Meteo geocoding: returns lat/lon for a city name
async function getCoordinates(city) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;
  const res = await fetch(url);
  const data = await res.json();

  if (!data.results || data.results.length === 0) {
    throw new Error(`City not found: ${city}`);
  }

  const { latitude, longitude } = data.results[0];
  return { latitude, longitude };
}

// Open-Meteo weather: returns current temp for given coordinates
async function fetchWeatherFromAPI(city) {
  const { latitude, longitude } = await getCoordinates(city);

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weathercode&timezone=auto`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    city,
    temperature: data.current.temperature_2m,
    unit: data.current_units.temperature_2m,
    fetchedAt: new Date().toISOString(),
  };
}

// GET /weather/:city
// Returns current weather for the given city.
// Problem: every request hits the external API — slow and wasteful.
app.get("/weather/:city", async (req, res) => {
  const { city } = req.params;

  try {
    const start = Date.now();

    const weather = await fetchWeatherFromAPI(city);

    const duration = Date.now() - start;

    res.json({
      ...weather,
      source: "api",       
      duration: `${duration}ms`,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Try: http://localhost:${PORT}/weather/london`);
});