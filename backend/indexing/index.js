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

  // EXPLAIN
  console.log("\n==== EXPLAIN (before index) ====\n");

  const explainBefore = await movies.find({year: 1994}).explain("executionStats");
  
  const statsBefore = explainBefore.executionStats;
  console.log("Query: find({ year: 1994 })");
  console.log(`  docsExamined : ${statsBefore.totalDocsExamined}`);  // scanned every movie
  console.log(`  docsReturned : ${statsBefore.nReturned}`);  // only needed these
  console.log(`  executionTime: ${statsBefore.executionTimeMillis}ms`);
  console.log(`  winningPlan  : ${statsBefore.executionStages.stage}`); // COLLSCAN
  console.log();


  console.log("\n==== CREATING INDEX ====\n");
  // in a relational db we do it with migrations
  await movies.createIndex({year: 1});

  

  // EXPLAIN
  console.log("\n==== EXPLAIN (after index) ====\n");

  const explainAfter = await movies.find({year: 1994}).explain("executionStats");
  
  const statsAfter = explainAfter.executionStats;
  console.log("Query: find({ year: 1994 })");
  console.log(`  docsExamined : ${statsAfter.totalDocsExamined}`);  // scanned every movie
  console.log(`  docsReturned : ${statsAfter.nReturned}`);  // only needed these
  console.log(`  executionTime: ${statsAfter.executionTimeMillis}ms`);
  console.log(`  winningPlan  : ${statsAfter.executionStages.stage}`); // 
  console.log();


  await client.close();
}

run().catch(console.error);