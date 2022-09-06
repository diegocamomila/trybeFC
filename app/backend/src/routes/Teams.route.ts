import * as express from 'express';
import { teamController } from '../services/TeamService/index'; // puxar do index do servise

const routes = express.Router();

routes.get('/:id', (request, response, next) => {
  teamController.handlerFindOne(request, response, next);
});

routes.get('/', (request, response, next) => {
  teamController.handlerFindAll(request, response, next);
});
export default routes;
