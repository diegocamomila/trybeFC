import * as express from 'express';
import { teamsListController } from '../services/TeamService/index'; // puxar do index do servise

const routes = express.Router();

routes.get('/:id', (request, response, next) => {
  teamsListController.findById(request, response, next);
});

routes.get('/', (request, response, next) => {
  teamsListController.listAll(request, response, next);
});
export default routes;
