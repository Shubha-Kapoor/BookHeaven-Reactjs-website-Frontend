import express from "express";
import { getBooks, getBookById, createBook } from "../controllers/bookController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getBooks).post(protect, createBook);
router.route("/:id").get(getBookById);

export default router;