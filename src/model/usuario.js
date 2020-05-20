const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Usuario = sequelize.define("usuario", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  nome: {
    allowNull: false,
    type: Sequelize.STRING(100),
    validate: {
      len: [2, 100]
    }
  },
  email: {
    allowNull: false,
    type: Sequelize.STRING(100),
    validate: {
      len: [2, 100]
    }
  },
  hash: {
    allowNull: false,
    type: Sequelize.TEXT,
    is: /^[0-9a-f]{64}$/i
  },
  salt: {
    allowNull: false,
    type: Sequelize.STRING(255),
    validate: {
      len: [2, 255]
    }
  }
});

module.exports = Usuario;
