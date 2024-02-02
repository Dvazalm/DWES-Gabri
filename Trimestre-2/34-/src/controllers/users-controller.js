import { querry } from 'express';
import { getUser, createUser } from '../services/database/user-db-service.js';

export async function getUserController(req, res, next){
  try {
    const users = await getUser(req-querry);
    return res.send(users);
  } catch (error) {
  next(error);
  }
}


export async function createUserController(req, res, next){
 try {
  const users = await createUser(req.body);
  return res.status(201).send(users);
 } catch (error) {
  next(error);
 }
}
