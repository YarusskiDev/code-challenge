class GetPessoasUseCase {
  constructor(pessoasRepository) {
    this.pessoasRepository = pessoasRepository;
  }
  async execute() {
    return await this.pessoasRepository.buscaTodos();
  }
}
module.exports = GetPessoasUseCase;
