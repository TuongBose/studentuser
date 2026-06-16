import { body, validationResult } from 'express-validator'
import { userRepository } from '../repositories/index.js';
import user from '../repositories/user.js';
import { EventEmitter } from 'node:events';
import HttpStatusCode from '../exceptions/httpStatusCode.js';

const myEvent = new EventEmitter();
//listen to event
myEvent.on('event.register.user', (params) => {
    console.log(`Event register user: ${JSON.stringify(params)}`);
})

const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(HttpStatusCode.BAD_REQUEST).json({
            errors: errors.array()
        });
    }

    const { email, password } = req.body;
    await userRepository.login({ email, password });
    res.status(HttpStatusCode.OK).json({
        message: 'Login user successfully'
    });
}

const register = async (req, res) => {
    // destructuring data from request body
    const { name, phoneNumber, address, email, password } = req.body;

    // Event Emitter
    myEvent.emit('event.register.user', { email, phoneNumber });

    try {
        const user = await userRepository.register({
            name,
            phoneNumber,
            address,
            email,
            password
        });
        res.status(HttpStatusCode.CREATED).json({
            message: 'Register user successfully',
            data: user
        });
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: error.toString()
        });
    }
}

const getDetailUser = async (req, res) => {
    res.status(HttpStatusCode.OK).json({
        message: 'Get detail user successfully'
    });
}

export default {
    login,
    register,
    getDetailUser
}