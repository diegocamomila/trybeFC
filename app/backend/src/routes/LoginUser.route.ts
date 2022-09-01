import * as express from 'express';
import { loginUserController } from '../services/LoginService';

const routes = express.Router();
routes.post('/', loginUserController.handlerLogin);

// routes.post('/', (request, response) => {
//   loginUserController.handlerLogin(request, response);
// });

// router.get('/validate', (request, _response) => UserLoginController
//   .validateToken(request.headers.authorization));

export default routes;
