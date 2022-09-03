import * as express from 'express';
import { matchesListController } from '../services/Matches/index'; // puxar do index do servise

const routes = express.Router();
routes.patch('/:id/finish', (request, response, next) => {
  matchesListController.updateInProgress(request, response, next);
});
routes.get('/', (request, response, next) => {
  matchesListController.listAll(request, response, next);
});

routes.post('/', (request, response, next) => {
  matchesListController.saveInProgress(request, response, next);
});
export default routes;
