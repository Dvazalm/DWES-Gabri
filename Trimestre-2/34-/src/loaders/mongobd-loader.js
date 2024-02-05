import * as mongoose from "mongoose";
import logger from "../utils/logger.js";

export default async function(config){
  const url = `mongodb://${config.host}:${config.port}/${config.dbName}`;
  try{
  await mongoose.connect(url)
  logger.info(`Connected to Monoogse to ${url}`)
}catch(err){
  logger.info(`Error conncting to MongoDB at  ${url} \n${err}`)
}
}
