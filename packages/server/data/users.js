import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    passwd: bcrypt.hashSync('12345678', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    passwd: bcrypt.hashSync('12345678', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    passwd: bcrypt.hashSync('12345678', 10),
  },
]

export default users