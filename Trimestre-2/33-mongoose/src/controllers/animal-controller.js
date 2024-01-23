import mongoose from "mongoose";
import logger from "../utils/logger.js";
import Animal from "../models/Animals.js";
import { HttpStatusError } from "common-errors";

export async function getAnimals(req, res, next) {
  try {
    const result = await Animal.find();
    return res.send(result);
  } catch (error) {
    next(error);
  }
}

export async function createAnimal(req, res, next) {
  try {
    const animal = new Animal(req.body);
    const createAnimal = await animal.save(); // Corregido: usar 'animal' en lugar de 'Animal'
    return res.status(201).send(createAnimal);
  } catch (error) {
    next(error);
  }
}

export async function updateAnimal(req, res, next) {
  try {
    const { id } = req.params;
    const animal = await Animal.findByIdAndUpdate(id, req.body, { new: true }); // Corregido: usar 'findByIdAndUpdate'
    if (!animal) {
      throw new HttpStatusError(404, `Animal ${id} not found`);
    }
    return res.status(200).send(animal);
  } catch (error) {
    next(error);
  }
}

export async function deleteAnimal(req, res, next) {
  try {
    const { id } = req.params;
    const deleteAnimal = await Animal.findByIdAndDelete(id);
    if (!deleteAnimal) {
      throw new HttpStatusError(404, `Animal ${id} not found`);
    }
    return res.status(200).send(deleteAnimal);
  } catch (error) {
    next(error);
  }
}
