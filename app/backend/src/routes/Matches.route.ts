import * as express from 'express';
// import validateToken from '../providers/validateToken';
import { matchController } from '../services/Matches/index'; // puxar do index do servise

const routes = express.Router();
routes.patch('/:id/finish', (request, response, next) => {
  matchController.handlerFinishMath(request, response, next);
});

routes.patch('/:id', (request, response, next) => {
  matchController.handlerUpdate(request, response, next);
});

routes.get('/', (request, response, next) => {
  matchController.handlerFindAll(request, response, next);
});

routes.post('/', (request, response, next) => {
  matchController.handlerAddMatch(request, response, next);
});
export default routes;
