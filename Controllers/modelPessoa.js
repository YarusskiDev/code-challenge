const Sequelize = require("sequelize");
const connection = require("../database/database");

const Pessoa = connection.define("Pessoas", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  saldo: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  transferencias: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  recebebimentos: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});

// Pessoa.sync({force:true});
module.exports = Pessoa;
