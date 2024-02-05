import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { type: String, requiered: true, unique: true },
  password: { type: String, require: true }
}, {timestamps: true});


userSchema.post('find', function (results){
  console.log('ey')
  results.forEach(doc => {
    delete doc.password;
  })
  next();
})

export default model('user', userSchema);
