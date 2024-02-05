import querry from 'express';
import { getUsers, createUser } from '../services/database/user-db-service.js';

export async function getUserMe(req, res, next){
try {
  const user = await getUserByName(req.user.username);
  return res.send(user);
} catch (error) {
  next(error);
}
}


export async function getUserController(req, res, next){
  try {
    const users = await getUsers(req-querry);
    return res.send(users);
  } catch (error) {
  next(error);
  }
}


export async function createUserController(req, res, next){
 try {
  const body = req.body;
body.password = await encrypttPassword(body.password);
  const users = await createUser(req.body);
  return res.status(201).send(users);
 } catch (error) {

  if(error.code === 11000){
    error.status = 409;
  }


  next(error);
 }
}
