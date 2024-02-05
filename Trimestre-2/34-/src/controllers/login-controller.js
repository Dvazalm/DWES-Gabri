import bcrypt from 'bcrypt';
import { HttpStatusError } from 'common-errors';
import jwt from 'jsonwebtoken';

import config from '../config.js';


export async function login(req, res, next){
       const { username, password } = req.body;

       try{
    const user = await getUserByName(username);

    if(user){
        console.log(password, user.password);
        if(bcrypt.compareSync(password, user.password)){
            const userInfo = { id: user.id, username: user.name };
            const jwtConfig = { expiresIn: 10 };
            const token = jwt.sign(userInfo, config.app.secretKey, jwtConfig);
            return res.send({token});
        }
    }

    throw new HttpStatusError(401, 'Invalid credentials');
  }catch{
    next(error);
  }
}









