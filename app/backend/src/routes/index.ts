import * as express from 'express';
import LoginRoutes from './LoginUser.route';

const routes = express.Router();

routes.use('/login', LoginRoutes);

export default routes;
