import { mongoose, Schema, ObjectId } from "mongoose";
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
                values: ['Male', 'Female', 'Other'],
                message: '{VALUE} is not supported'
            },
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
            validate: {
                validator: (phoneNumber) => phoneNumber.length > 5
                    && phoneNumber.length < 25,
                message: 'Phone number must be between 6 and 20 characters long'
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