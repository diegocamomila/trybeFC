import * as express from 'express';
import { leaderboardController } from '../services/LeaderboardService/index'; // puxar do index do servise

const routes = express.Router();

routes.get('/home', (request, response, next) => {
  leaderboardController.handlerFindAllHome(request, response, next);
});

routes.get('/away', (request, response, next) => {
  leaderboardController.handlerFindAllAway(request, response, next);
});

// routes.get('/', (request, response, next) => {
//   leaderboardController.handlerFindAll(request, response, next);
// });

export default routes;
