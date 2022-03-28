const ShowPessoaController = require("./ShowPessoaController");
const ShowPessoaUseCase = require("./ShowPessoaUseCase");
const { PessoasRepository } = require("../../repositories/PessoasRepository");

const pessoasRepository = new PessoasRepository();
const showPessoaUseCase = new ShowPessoaUseCase(pessoasRepository);

const showPessoaController = new ShowPessoaController(showPessoaUseCase);

module.exports = { showPessoaUseCase, showPessoaController };
