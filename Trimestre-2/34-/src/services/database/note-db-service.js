import Note from "../../models/Note";

export async function createNote(data){
  const note = new Note(data);
  return note.save();
}

export async function getNoteById(id){
  return Note.findById(id).populate('author');
}
