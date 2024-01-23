import mongoose, { Schema } from "mongoose";

const { Schecma } = mongoose;

const animalSubSchema = new Schema({
  data: Schema.Types.Mixed,
});


const animalSchema = new Schema({
  name: String,
  color: String,
  legs: Number,
  hasTail: Boolean,
  age: Number,
    data: Schema.Types.Mixed,
});

export default  mongoose.model(`Animal`, animalSchema);
