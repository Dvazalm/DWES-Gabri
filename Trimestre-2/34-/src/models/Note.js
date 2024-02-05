import mongoose, { Schema } from "mongoose";

const { schema, model} = mongoose;

const noteSchema = new Schema({
  title: { type:String, requiered: true, unique: true},
  content: { type: String, requiered: true, match: /^(?!\s*$).+/ },
  category: {type: String, default: 'uncategorized'},
  author: { type: Schema.Types.ObjectId, ref: 'user'},
}, {timestamps: true});

export default model('note', noteSchema);
