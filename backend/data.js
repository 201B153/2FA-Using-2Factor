import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: '201b153',
      email: 'admin@test.com',
      password: bcrypt.hashSync('mayankm698'),

    },
    {
      name: 'john',
      email: 'user@test.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
};
export default data;
