import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js"; // <-- Add this

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// Mount Routes
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes); // <-- Add this

app.get("/", (req, res) => {
  res.json({ message: "BookHeaven Digital Library API is running successfully!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});