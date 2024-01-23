import { Router } from 'express';
import { getAnimals, createAnimal, deleteAnimal, updateAnimal } from '../controllers/animal-controller.js';

const router = Router();

router.get('/', getAnimals);
router.post('/', createAnimal);
router.patch('/:id', updateAnimal);
router.delete('/:id', deleteAnimal);
export default router;
