import Exception from '../exceptions/Exception.js';
import { print } from '../helpers/print.js';
import Student from '../models/Student.js'
import { faker } from '@faker-js/faker'

const getAllStudents = async ({
    page,
    size,
    searchString
}) => {
    page = parseInt(page);
    size = parseInt(size);
    let filteredStudents = await Student.aggregate([
        {
            $match: {
                $or: [
                    {
                        name: { $regex: `.*${searchString}.*`, $options: 'i' } //ignore case
                    },
                    {
                        email: { $regex: `.*${searchString}.*`, $options: 'i' } //ignore case
                    },
                    {
                        address: { $regex: `.*${searchString}.*`, $options: 'i' } //ignore case
                    }
                ]
            }
        },
        {
            $skip: (page - 1) * size
        },
        {
            $limit: size
        }
    ])
    return filteredStudents
}

const getStudentById = async (studentId) => {
    const student = await Student.findById(studentId)
    if (!student) {
        throw new Exception('Cannot find Student with id: ' + studentId)
    }
    return student
}

const insertStudent = async ({
    name,
    email,
    languages, // languages: ['JavaScript', 'Python', 'Java']
    gender,
    phoneNumber,
    address
}) => {
    // console.log('Insert student with name: ', name, ' email: ', email, ' languages: ', languages);
    try {
        const student = await Student.create({
            name,
            email,
            languages,
            gender,
            phoneNumber,
            address
        })
        return student;
    } catch (exception) {
        if (!!exception.errors) {
            throw new Exception('Input error', exception.errors);
        }
    }
}

async function generateFakeStudents() {
    let fakeStudents = []
    for (let i = 0; i < 1000; i++) {
        let fakeStudent = {
            name: `${faker.person.fullName()}-fake`,
            email: faker.internet.email(),
            languages: [
                faker.helpers.arrayElement(['English', 'Vietnamese', 'Japanese']),
                faker.helpers.arrayElement(['French', 'German', 'Spanish'])
            ],
            gender: faker.helpers.arrayElement(['Male', 'Female']),
            phoneNumber: faker.phone.number(),
            address: faker.location.streetAddress()
        }
        fakeStudents.push(fakeStudent)
    }
    await Student.insertMany(fakeStudents)
}

const updateStudent = async ({
    id,
    name,
    email,
    languages, // languages: ['JavaScript', 'Python', 'Java']
    gender,
    phoneNumber,
    address
}) => {
    // console.log('Insert student with name: ', name, ' email: ', email, ' languages: ', languages);
    const student = await Student.findById(id)
    student.name = name ?? student.name
    student.email = email ?? student.email
    student.phoneNumber = phoneNumber ?? student.phoneNumber
    student.address = address ?? student.address
    student.languages = languages ?? student.languages
    student.gender = gender ?? student.gender
    await student.save()
    return student
}

export default {
    getAllStudents,
    insertStudent,
    generateFakeStudents,
    getStudentById,
    updateStudent
}