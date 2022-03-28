const SquelizePessoasRepository = require("./implementations/Sequelize/SquelizePessoasRepository");
const PessoasSchema = require("./implementations/Sequelize/PessoasSchema");

module.exports = {
  PessoasRepository: SquelizePessoasRepository,
  PessoasSchema,
};
