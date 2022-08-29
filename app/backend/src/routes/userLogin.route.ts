import * as express from 'express';
import UserLoginController from '../controllers/userLogin.controller';

const router = express.Router();

router.post('/', (request, _response) => {
  UserLoginController.handlerLogin(request.body);
});

router.get('/validate', (request, _response) => UserLoginController
  .validateToken(request.headers.authorization));

export default router;
