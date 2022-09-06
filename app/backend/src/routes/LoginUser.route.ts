import * as express from 'express';
import { loginController } from '../services/LoginService/index';

const routes = express.Router();
// routes.post('/', loginUserController.handlerLogin); com classe assim nao vai

routes.post('/', (request, response, next) => {
  loginController.handlerLogin(request, response, next);
});

routes.get('/validate', (request, response, next) => {
  loginController.validateToken(request, response, next);
});

export default routes;
