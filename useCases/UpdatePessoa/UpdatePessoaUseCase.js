class UpdatePessoaUseCase {
  constructor(pessoasRepository) {
    this.pessoasRepository = pessoasRepository;
  }
  async execute(id, { nome }) {
    return await this.pessoasRepository.editar(id, nome);
  }
}
module.exports = UpdatePessoaUseCase;
