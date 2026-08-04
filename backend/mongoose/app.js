require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/users", userRoutes)
app.use("/posts", postRoutes)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Error Handling Middleware 
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error",
  });
});

async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Database connection established successfully.");
  } catch (error) {
    console.error("❌ Unable to connect to database:", error);
  }
}

async function startServer() {
  app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    await dbConnect();
  });
}
startServer();