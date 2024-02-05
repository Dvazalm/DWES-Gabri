import { createNote, deleteNote, getAllNotes, getNote, updateNote } from "../controllers/notes-controller.js";
import { Router  } from "express";

const router = Router();

router.get('/me', getAllNotes);
router.get('/:id', getNote);
router.post('/', createNote );
router.put('/:id', updateNote );
router.delete('/:id', deleteNote );

export default router;
