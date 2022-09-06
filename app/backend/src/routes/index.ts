import * as express from 'express';
import LoginRoutes from './LoginUser.route';
import TeamsRoutes from './Teams.route';
import MatchesRoutes from './Matches.route';
// import LeaderboardRoutes from './Leaderboard.route';

const routes = express.Router();

routes.use('/login', LoginRoutes);
routes.use('/teams', TeamsRoutes);
routes.use('/matches', MatchesRoutes);
// routes.use('/leaderboard', LeaderboardRoutes);

export default routes;
