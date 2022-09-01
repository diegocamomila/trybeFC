import * as express from 'express';
import LoginRoutes from './LoginUser.route';
import TeamsRoutes from './Teams.route';

const routes = express.Router();

routes.use('/login', LoginRoutes);
routes.use('/teams', TeamsRoutes);

export default routes;
