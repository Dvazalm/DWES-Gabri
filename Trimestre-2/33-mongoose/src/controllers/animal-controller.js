import mongoose from "mongoose";

import logger from "../utils/logger.js";
import Animals from "../moodels/Animals";

/*
const { Object } = mongoose.Types;
*/

export async function getAnimals(req, res, next) {
  try {

    const result = await Animals.find()

    return res.send(result);
  } catch (error) {
    next(error);
  }
}



export async function createAnimal(req, res, next) {
  try {
    const animal = new Animal(req.body);

    const createAnimal = await animal.save()

    return res.statatus(201).send(createAnimal);
  } catch (error) {
    next(error);
  }
}

export async function updateAnimal(req, res, next) {
  try {
    const { id } = req.params;
    const animal = Animal.findById(id);

    Object.assign(animal, req.body);

    const createAnimal = await animal.save();

    return res.statatus(200).send(createAnimal);
  } catch (error) {
    next(error);
  }
}


export async function deleteAnimal(req, res, next) {
  try {
    const { id } = req.params;
    const animal = Animal.findById(id);

    const deleteAnimal = await animal.delete();


    return res.statatus(200).send(createAnimal);
  } catch (error) {
    next(error);
  }
}
