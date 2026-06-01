import express from 'express';
import { body, validationResult } from 'express-validator'
const router = express.Router();
import {
    userController
} from '../controllers/index.js';

router.get('/:id', userController.getDetailUser);

router.post('/login',
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    userController.login
);

router.post('/register', userController.register);

export default router;