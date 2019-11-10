import {NextFunction, Request, Response} from 'express';
import validator from 'validator';
import ErrorHandling from '../error-handling';


const paramMongoId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.params.id || !validator.isMongoId(req.params.id)){
      throw new Error('Project id is not correct or not found');
    }
    next();
  } catch (e) {
    ErrorHandling(e, res, 401);
  }
};
export default paramMongoId;
