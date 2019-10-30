import {NextFunction, Request, Response} from 'express';
import validator from 'validator';


const paramMongoId = async (req: Request, res: Response, next: NextFunction) => {
  if (!validator.isMongoId(req.params.id)) {
    throw new Error('Project id is not correct or not found');
  }
  next();

};
export default paramMongoId;
