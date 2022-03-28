class ShowPessoaUseCase {
  constructor(pessoasRepository) {
    this.pessoasRepository = pessoasRepository;
  }
  async execute(id) {
    if (typeof id !== "number") throw Error("Dado inconsistente");
    return await this.pessoasRepository.buscarUm(id);
  }
}
module.exports = ShowPessoaUseCase;
