import {Response} from 'express';


class ErrorHandling {
  constructor(error: Error, res: Response, status: number = 400) {
    // console.log('Console Error: ' + error.message)
    res.status(status).send({error: 'Error: ' + error.message});
  }
}

const errorHand = (e: Error, r: Response, s: number) => new ErrorHandling(e, r, s);
export default errorHand;
