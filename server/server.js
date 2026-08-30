const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB Atlas
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Base Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to BookHeaven API!",
    status: "Server and MongoDB are running successfully",
  });
});

// Book API Routes
app.use("/api/books", require("./routes/bookRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});