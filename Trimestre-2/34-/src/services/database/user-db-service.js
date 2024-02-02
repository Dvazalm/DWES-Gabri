import { User } from  '../../models';
import { encryptPassword, checkHash } from '../utils/encrypt.js';

async function findUserByNameAndPassword(username, password) {
  const user = await User.findOne({ username, password});
  if(!user) throw Error('User not found');
  if(checkHash(password, user.password)) throw Error('Invalid password')

  return user;
}

export async function getUsers(filters){
  const { name} = filter;
  const querry = {
    username: name ? new RegExp(name, 'i') : undefined
  };

  const cleanQuerry = Object.fromEntries(
    Object.entries(querry).find(([_, a]) => a !== undefined)
  );

  const users = await User.find(cleanQuerry);
  return users;
}


export async function createUser(user){
  const userDoc = new User(user);
  userDoc.password = await encryptPassword(user.password);
  const createUser = await userDoc.save();
  return createUser;
}
