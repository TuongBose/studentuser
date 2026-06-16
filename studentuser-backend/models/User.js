import { mongoose, Schema,ObjectId } from "mongoose";
import isEmail from 'validator/lib/isEmail.js'

const User= mongoose.model('User',
    new Schema({
        id: { type: ObjectId },
        name: {
            type: String,
            required: true,
            validate: {
                validator: (value) => value.length > 3,
                message: 'Name must be at least 3 characters long'
            }
        },
        email: {
            type: String,
            validate: {
                validator: (value) => isEmail,
                message: 'Email is not valid'
            }
        },
        password: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: false,
        }
    })
);

export default User;