import * as express from 'express';
import LoginRoutes from './userLogin.route';

const routes = express.Router();

routes.use('/login', LoginRoutes);

export default routes;
