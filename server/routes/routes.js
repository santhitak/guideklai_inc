import express from "express";
import { blogs } from "../controllers/index.js";

const router = express.Router();

router.get('/', blogs);
router.get('/auth/login', blogs);
router.get('/auth/register', blogs);

export default router;