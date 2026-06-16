import Exception from '../exceptions/Exception.js';
import { print, OutputType } from '../helpers/print.js';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

const login = async ({ email, password }) => {
    // const isMatched = await bcrypt.compare(password, existingUser.password)
    // if(isMatched){
    print(`Login user with email: ${email} and password: ${password}`, OutputType.INFOMATION);
}

const register = async ({
    name,
    phoneNumber,
    address,
    email,
    password
}) => {
    const existingUser = await User.findOne({ email }).exec()
    if (!!existingUser) {
        throw new Exception(Exception.USER_ALREADY_EXISTS);
    }
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));
    const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        phoneNumber,
        address
    })
    return {
        ...newUser._doc,
        password: 'Not show'
    };
    // print(`Register user with email: ${email} and password: ${password}`, OutputType.INFOMATION);
}

export default {
    login,
    register
}