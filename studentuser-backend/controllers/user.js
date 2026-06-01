import { body, validationResult } from 'express-validator'
import { userRepository } from '../repositories/index.js';
import user from '../repositories/user.js';
import {EventEmitter} from 'node:events';

const myEvent  = new EventEmitter();
//listen to event
myEvent.on('event.register.user',(params)=>{
    console.log(`Event register user: ${JSON.stringify(params)}`);
})

const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const { email, password } = req.body;
    await userRepository.login({ email, password });
    res.status(200).json({
        message: 'Login user successfully'
    });
}

const register = async (req, res) => {
    // destructuring data from request body
    const { name, phoneNumber, address, email, password } = req.body;
    await userRepository.register({
        name,
        phoneNumber,
        address,
        email,
        password
    });
    // Event Emitter
    myEvent.emit('event.register.user',{email,phoneNumber});
    res.status(201).json({
        message: 'Register user successfully'
    });
}

const getDetailUser = async (req, res) => {
    res.status(200).json({
        message: 'Get detail user successfully'
    });
}

export default {
    login,
    register,
    getDetailUser
}