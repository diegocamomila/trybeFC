import * as express from 'express';
import { matchesListController } from '../services/Matches/index'; // puxar do index do servise

const routes = express.Router();

routes.get('/', (request, response, next) => {
  matchesListController.listAll(request, response, next);
});
export default routes;
