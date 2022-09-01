import * as express from 'express';
import { loginUserController } from '../services/LoginService';

const routes = express.Router();
// routes.post('/', loginUserController.handlerLogin);

routes.post('/', (request, response, next) => {
  loginUserController.handlerLogin(request, response, next);
});

// router.get('/validate', (request, _response) => UserLoginController
//   .validateToken(request.headers.authorization));

export default routes;
