class DeletePessoaUseCase {
  constructor(pessoasRepository) {
    this.pessoasRepository = pessoasRepository;
  }
  async execute(id) {
    return await this.pessoasRepository.deletar(id);
  }
}
module.exports = DeletePessoaUseCase;
