import * as express from 'express';
import { loginUserController } from '../services/LoginService';

const routes = express.Router();
// routes.post('/', loginUserController.handlerLogin);

routes.post('/', (request, response, next) => {
  loginUserController.handlerLogin(request, response, next);
});

routes.get('/validate', (request, response, next) => {
  loginUserController.validateToken(request, response, next);
});

export default routes;
