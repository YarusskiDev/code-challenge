const DepositoController = require("./DepositoController");
const DepositoUseCase = require("./DepositoUseCase");
const { PessoasRepository } = require("../../repositories/PessoasRepository");

const pessoasRepository = new PessoasRepository();
const depositoUseCase = new DepositoUseCase(pessoasRepository);

const depositoController = new DepositoController(depositoUseCase);

module.exports = { depositoUseCase, depositoController };
