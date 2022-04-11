import express from "express";
import {province, createAccount} from "../controllers/index.js";

const router = express.Router();

router.get('/', province);
router.get('/auth/login', province);
router.get('/auth/register', createAccount);
router.post('/auth/register', createAccount);

export default router;