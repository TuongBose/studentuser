import HttpStatusCode from "../exceptions/httpStatusCode.js";
import { MAX_RECORDS } from "../Global/constants.js";
import { studentRepository } from "../repositories/index.js";

async function getAllStudents(req, res) {
    let { page = 1, size = MAX_RECORDS, searchString = '' } = req.query
    size = size >= MAX_RECORDS ? MAX_RECORDS : size
    try {
        let filteredStudents = await studentRepository.getAllStudents({
            size, page, searchString
        })
        res.status(HttpStatusCode.OK).json({
            message: 'Get all students successfully',
            size: filteredStudents.length,
            page,
            searchString,
            data: filteredStudents,
        });
    } catch (exception) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: exception.message
        })
    }
}

async function getStudentById(req, res) {
    let studentId = req.params.id
    try {
        const student = await studentRepository.getStudentById(studentId)
        res.status(HttpStatusCode.OK).json({
            message: 'Get detail student successfully',
            data: student
        })
    } catch (exception) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: exception.message
        })
    }
}

async function insertStudent(req, res) {
    try {
        const student = await studentRepository.insertStudent(req.body);
        res.status(HttpStatusCode.CREATED).json({
            message: 'Insert student successfully',
            data: student
        });
    } catch (exception) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: 'Cannot insert student' + exception,
            validationErrors: exception.validationErrors
        });
    }
}

async function updateStudentById(req, res) {
    const {
        id,
        name,
        email,
        languages,
        gender,
        phoneNumber,
        address
    } = req.body
    try {
        const student = await studentRepository.updateStudent(req.body)
        res.status(HttpStatusCode.OK).json({
            message: 'Update student successfully',
            data: student
        })
    } catch (exception) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: exception.message
        })
    }
}

async function deleteStudentById(req, res) { }

async function generateFakeStudents(req, res) {
    await studentRepository.generateFakeStudents(req.body)
    res.status(HttpStatusCode.CREATED).json({
        message: 'Insert fake student successfully',
    });
}

export default {
    getAllStudents,
    getStudentById,
    insertStudent,
    updateStudentById,
    deleteStudentById,
    generateFakeStudents,
    getStudentById
}