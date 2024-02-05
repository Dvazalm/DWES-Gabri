import Note from '../models/Note.js';

export async function getAllNotes(req, res, next) {
  try {
    const notes = await Note.find();
    return res.send(notes);
  } catch (error) {
    next(error);
  }
}

export async function getNote(req, res, next) {
  const { id } = req.params;
  try {
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404);
    }
    return res.send(note);
  } catch (error) {
    next(error);
  }
}

export async function createNote(req, res, next) {
  try {
    const body = req.body;
    body.author = req.user.id;
    const note = await Note.create(body);
    return res.status(201).send(note);
  } catch (error) {
    next(error);
  }
}

export async function updateNote(req, res, next) {
  const { id } = req.params;
  const { title, content, category } = req.body;
  try {
    const updatedNote = await Note.findByIdAndUpdate(id, { title, content, category }, { new: true });
    if (!updatedNote) {
      return res.status(404);
    }
    return res.send(updatedNote);
  } catch (error) {
    next(error);
  }
}

export async function deleteNote(req, res, next) {
  const { id } = req.params;
  try {
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404);
    }
    return res.send({ message: 'Note deleted successfully' });
  } catch (error) {
    next(error);
  }
}
