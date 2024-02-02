import mongoose, { Schema } from "mongoose";

const { schema, model} = mongoose;

const noteSchema = new Schema({
  titlee: { type:String, requiered: true, unique: true},
  content: { type: String, requiered: true, match: /^(?!\s*$).+/ },
  category: {type: String, default: 'uncategorized'},
  authir: { type: mongoose.Type.Object}
}, {timestamps: true});

export default model('note', noteSchema);
