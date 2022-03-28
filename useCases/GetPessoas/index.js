const GetPessoasController = require("./GetPessoasController");
const GetPessoasUseCase = require("./GetPessoasUseCase");
const { PessoasRepository } = require("../../repositories/PessoasRepository");

const pessoasRepository = new PessoasRepository();
const getPessoasUseCase = new GetPessoasUseCase(pessoasRepository);

const getPessoasController = new GetPessoasController(getPessoasUseCase);

module.exports = { getPessoasUseCase, getPessoasController };
