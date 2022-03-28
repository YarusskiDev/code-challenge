class DepositoUseCase {
  constructor(pessoasRepository) {
    this.pessoasRepository = pessoasRepository;
  }
  async execute({ id, deposito }) {
    return await this.pessoasRepository.deposito(id, deposito);
  }
}
module.exports = DepositoUseCase;
