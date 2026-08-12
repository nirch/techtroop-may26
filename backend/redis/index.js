const express = require("express");
const { createClient } = require("redis");

const app = express();
const PORT = 3000;
const redisClient = createClient();
const CACHE_TTL = 60; // seconds

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
// Solution: using redis for caching the city weather for 60 seconds
app.get("/weather/:city", async (req, res) => {
  const { city } = req.params;
  const cacheKey = `weather:${city.toLowerCase()}`;

  try {
    const start = Date.now();

    const cached = await redisClient.get(cacheKey);

    if (cached) {
      // Cache HIT
      const duration = Date.now() - start;
      return res.json({
        ...JSON.parse(cached),
        source: "redis",
        duration: `${duration}ms`,
      })
    }

    // reaching here meaning - cache MISS
    const weather = await fetchWeatherFromAPI(city);

    // Store in Redis 
    redisClient.setEx(cacheKey, CACHE_TTL, JSON.stringify(weather))

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

async function connectRedis() {
  await redisClient
    .on("error", (err) => console.error("Redis error:", err))
    .connect();

  console.log("Connected to Redis");
}

connectRedis().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Try: http://localhost:${PORT}/weather/london`);
  });
});
