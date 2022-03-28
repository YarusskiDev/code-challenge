const UpdatePessoaController = require("./UpdatePessoaController");
const UpdatePessoaUseCase = require("./UpdatePessoaUseCase");
const { PessoasRepository } = require("../../repositories/PessoasRepository");

const pessoasRepository = new PessoasRepository();
const updatePessoaUseCase = new UpdatePessoaUseCase(pessoasRepository);

const updatePessoaController = new UpdatePessoaController(updatePessoaUseCase);

module.exports = { updatePessoaUseCase, updatePessoaController };
