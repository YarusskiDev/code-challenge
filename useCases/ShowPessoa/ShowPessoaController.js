class ShowPessoaController {
  constructor(showPessoaUseCase) {
    this.showPessoaUseCase = showPessoaUseCase;
  }

  async handle(req, res) {
    try {
      const id = parseInt(req.params.id);
      const pessoa = await this.showPessoaUseCase.execute(id);
      return res.status(201).json({ data: pessoa || {} });
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
module.exports = ShowPessoaController;
