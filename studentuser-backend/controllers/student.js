async function getAllStudents(req, res) {
    res.status(200).json({
        message: 'Get all students successfully',
        data: [
            {
                name: 'Student 1',
                email: 'student1@example.com',
                age: 20
            },
            {
                name: 'Student 2',
                email: 'student2@example.com',
                age: 22
            },
            {
                name: 'Student 3',
                email: 'student3@example.com',
                age: 21
            },
        ]
    });
}

async function getStudentById(req, res) { }

async function insertStudent(req, res) { }

async function updateStudentById(req, res) { }

async function deleteStudentById(req, res) { }

export default {
    getAllStudents,
    getStudentById,
    insertStudent,
    updateStudentById,
    deleteStudentById
}