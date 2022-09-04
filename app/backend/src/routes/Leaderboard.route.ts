import * as express from 'express';
import { leaderboardListController } from '../services/LeaderboardService/index'; // puxar do index do servise

const routes = express.Router();

routes.get('/home', (request, response, next) => {
  leaderboardListController.sort(request, response, next);
});

export default routes;
