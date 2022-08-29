import * as express from 'express';
import UserLoginController from '../controllers/userLogin.controller';

const router = express.Router();

router.post('/', (request, response) => UserLoginController.execute(request, response));

// router.get('/validate', authMiddleware);

export default router;
