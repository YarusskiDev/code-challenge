class CreatePessoaController {
  constructor(createPessoaUseCase) {
    this.createPessoaUseCase = createPessoaUseCase;
  }

  async handle(req, res) {
    try {
      const body = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        saldo: parseInt(req.body.saldo),
      };
      const pessoa = await this.createPessoaUseCase.execute(body);

      return res.status(201).json({ data: pessoa || {} });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
module.exports = CreatePessoaController;
