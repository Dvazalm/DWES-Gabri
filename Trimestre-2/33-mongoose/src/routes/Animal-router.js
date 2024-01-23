import { Router } from 'express';
import { createAnimal, getAnimals, updateAnimal } from '../controllers/animal-controller.js';

const router = Router();

router.get('/', getAnimals);
router.post('/', createAnimal);
router.patch('/:id', updateAnimal);
export default router;
