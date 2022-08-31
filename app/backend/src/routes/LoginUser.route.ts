import * as express from 'express';
import LoginUserController from '../controllers/LoginUser.controller';

const router = express.Router();
// router.post('/', LoginUserController.handlerLogin);

router.post('/', (request, response) => {
  LoginUserController.handlerLogin(request, response);
});

// router.get('/validate', (request, _response) => UserLoginController
//   .validateToken(request.headers.authorization));

export default router;
