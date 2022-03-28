const TransferirController = require("./TransferirController");
const TransferirUseCase = require("./TransferirUseCase");
const { PessoasRepository } = require("../../repositories/PessoasRepository");

const pessoasRepository = new PessoasRepository();
const transferirUseCase = new TransferirUseCase(pessoasRepository);

const transferirController = new TransferirController(transferirUseCase);

module.exports = { transferirUseCase, transferirController };
