require("dotenv").config();
const { MongoClient } = require("mongodb");

const URI = process.env.MONGO_URI;
const client = new MongoClient(URI);

async function run() {
  await client.connect();
  const db = client.db("sample_mflix");
  const movies = db.collection("movies");

  console.log("=== WITHOUT INDEX ===\n");

  // How long does it take to find all movies from a specific year?
  // MongoDB has to scan EVERY document in the collection to answer this.
  let t = Date.now();
  const byYear = await movies
    .find({ year: 1994 })
    .toArray();
  console.log(`Query 1 - find by year:       ${Date.now() - t}ms  (${byYear.length} results)`);


  await client.close();
}

run().catch(console.error);