import { Router  } from "express";
import { getUserController } from '../controllers/users-controller.js';
import router from "./misc-router.js";


const router = Router();

router.post('/', getUserController);

export default router;
