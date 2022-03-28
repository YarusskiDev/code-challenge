class TransferirUseCase {
  constructor(pessoasRepository) {
    this.pessoasRepository = pessoasRepository;
  }
  async execute({ remetente, destinatario, valor }) {
    return await this.pessoasRepository.transferir(
      remetente,
      valor,
      destinatario
    );
  }
}
module.exports = TransferirUseCase;
