const CreatePessoaController = require("./CreatePessoaController");
const CreatePessoaUseCase = require("./CreatePessoaUseCase");
const { PessoasRepository } = require("../../repositories/PessoasRepository");

const pessoasRepository = new PessoasRepository();
const createPessoaUseCase = new CreatePessoaUseCase(pessoasRepository);

const createPessoaController = new CreatePessoaController(createPessoaUseCase);

module.exports = { createPessoaUseCase, createPessoaController };
