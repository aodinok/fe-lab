const Sequelize = require('sequelize');
const UserModel = require('./user');

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING);

const User = sequelize.define('user', UserModel);

function createUser() {
  User.sync({force: true}).then(() => {
    return User.create({
      firstName: 'Alex',
      lastName: 'Odinok'
    });
  });
}

module.exports = {
  init: () => {
    createUser()
  },
  User
}
