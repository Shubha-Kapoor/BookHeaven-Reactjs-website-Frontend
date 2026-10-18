import express from "express";
import { toggleFavorite, getFavorites, updateSubscription } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/favorites", protect, getFavorites);
router.post("/favorite/:bookId", protect, toggleFavorite);
router.put("/subscribe", protect, updateSubscription);

export default router;