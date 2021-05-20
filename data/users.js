import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Company ABC',
        email: 'abc@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Universal Incorporated',
        email: 'uni@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
        
    }
]

export default users