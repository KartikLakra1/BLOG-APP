import express from 'express';
import { getallusers, loginController, registerController } from '../controller/userController.js';

const router = express.Router();


router.get('/getallusers', getallusers);

router.post('/register', registerController);

router.post('/login', loginController)





export default router;