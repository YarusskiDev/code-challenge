class UpdatePessoaController {
  constructor(updatePessoaUseCase) {
    this.updatePessoaUseCase = updatePessoaUseCase;
  }

  async handle(req, res) {
    try {
      const id = req.params.id;
      const body = {
        nome: req.body.nome,
      };
      const pessoa = await this.updatePessoaUseCase.execute(id, body);

      return res.status(201).json({ data: pessoa || {} });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
module.exports = UpdatePessoaController;
