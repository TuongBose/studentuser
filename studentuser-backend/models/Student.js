import { mongoose, Schema } from "mongoose";
import isEmail from 'validator/lib/isEmail.js'

const Student = mongoose.model('Student',
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
        languages: {
            type: [String],
        },
        gender: {
            type: String,
            enum: {
                values: ['male', 'female', 'other'],
                message: '{VALUE} is not supported'
            },
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
            validate: {
                validator: (phoneNumber) => phoneNumber.length > 5,
                message: 'Phone number must be at least 6 characters long'
            }
        },
        address: {
            type: String,
            required: false,
        }
    },
        {
            autoCreate: false,
            autoIndex: true
        }
    )
);

export default Student;