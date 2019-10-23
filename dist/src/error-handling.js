"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandling {
    constructor(error, res, status = 400) {
        // console.log('Console Error: ' + error.message)
        res.status(status).send({ error: 'Error: ' + error.message });
    }
}
const errorHand = (e, r, s) => new ErrorHandling(e, r, s);
exports.default = errorHand;
