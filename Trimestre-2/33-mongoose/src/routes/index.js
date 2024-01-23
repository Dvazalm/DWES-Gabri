import express from 'express';
import { login } from '../controllers/login-controller.js';
import animals from '../routes/Animal-router.js';

const router = express.Router();

router.post('/login', login);

router.use(animals);

export default router;
