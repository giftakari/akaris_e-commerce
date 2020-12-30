import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Samuel Jonny',
    email: 'samsam@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Akaris Mumu',
    email: 'akaris@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];


export default users;