class DeletePessoaController {
  constructor(deletePessoaUseCase) {
    this.deletePessoaUseCase = deletePessoaUseCase;
  }

  async handle(req, res) {
    try {
      const id = req.params.id;

      const pessoa = await this.deletePessoaUseCase.execute(id);

      return res.status(201).json({ data: pessoa || {} });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
module.exports = DeletePessoaController;
