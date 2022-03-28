const DeletePessoaController = require("./DeletePessoaController");
const DeletePessoaUseCase = require("./DeletePessoaUseCase");
const { PessoasRepository } = require("../../repositories/PessoasRepository");

const pessoasRepository = new PessoasRepository();
const deletePessoaUseCase = new DeletePessoaUseCase(pessoasRepository);

const deletePessoaController = new DeletePessoaController(deletePessoaUseCase);

module.exports = { deletePessoaUseCase, deletePessoaController };
