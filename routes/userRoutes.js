import express from 'express';
import { getallusers, getuserinfo, loginController, registerController } from '../controller/userController.js';

const router = express.Router();


router.get('/getallusers', getallusers);

router.post('/register', registerController);

router.post('/login', loginController)

router.get('/userinfo/:userId', getuserinfo)





export default router;