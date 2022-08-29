import * as express from 'express';
import UserLoginController from '../controllers/userLogin.controller';
import AuthToken from '../Services/authorizationToken.service';

const router = express.Router();

router.post('/', (request, response) => UserLoginController.execute(request, response));

router.get('/validate', (request, response) => AuthToken(request, response));

export default router;
