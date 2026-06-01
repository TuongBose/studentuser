const getAllStudents = async ({
    page,
    size,
    searchString
})=>{
    console.log('Get all students with page: ', page, ' size: ', size, ' searchString: ', searchString);
}

const insertStudent = async ({
    name,
    email,
    languages, // languages: ['JavaScript', 'Python', 'Java']
    gender,
    phoneNumber,
    address
})=>{
    console.log('Insert student with name: ', name, ' email: ', email, ' languages: ', languages);
}

export default {
    getAllStudents,
    insertStudent
}