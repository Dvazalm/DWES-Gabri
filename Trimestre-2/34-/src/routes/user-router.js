import { Router  } from "express";
import { getUserController, getUserMe } from '../controllers/users-controller.js';
import { checkToken } from "../middlewares/auth-middleware.js";


const router = Router();

router.get('/me', checkToken, getUserMe);
router.get('/', checkToken, getUserController);
router.post('/', getUserController);


export default router;
