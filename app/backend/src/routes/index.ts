import * as express from 'express';
import LoginRoutes from './LoginUser.route';
import TeamsRoutes from './Teams.route';
import MatchesRoutes from './Matches.route';

const routes = express.Router();

routes.use('/login', LoginRoutes);
routes.use('/teams', TeamsRoutes);
routes.use('/matches', MatchesRoutes);

export default routes;
