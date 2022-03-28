class CreatePessoaUseCase {
  constructor(pessoasRepository) {
    this.pessoasRepository = pessoasRepository;
  }
  async execute({ nome, cpf, saldo }) {
    const cpfExist = await this.pessoasRepository.buscarCpf(cpf);
    if (cpfExist) throw Error("Esse CPF já tem conta!");

    return await this.pessoasRepository.criarPessoa(nome, cpf, saldo);
  }
}
module.exports = CreatePessoaUseCase;
