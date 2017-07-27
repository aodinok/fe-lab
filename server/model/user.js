const Sequelize = require('sequelize');

const User = {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
};

module.exports = User
