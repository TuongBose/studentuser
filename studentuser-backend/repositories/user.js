const login = async ({ email, password }) => {
    console.log('Login user with email: ', email, ' and password: ', password);
}

const register = async ({
    name,
    phoneNumber,
    address,
    email,
    password
}) => {
    console.log('Register user with email: ', email, ' and password: ', password);
}

export default {
    login,
    register
}