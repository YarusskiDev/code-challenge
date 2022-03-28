class GetPessoasController {
  constructor(getPessoasUseCase) {
    this.getPessoasUseCase = getPessoasUseCase;
  }

  async handle(req, res) {
    try {
      const pessoas = await this.getPessoasUseCase.execute();

      return res.status(201).json({ data: pessoas });
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
module.exports = GetPessoasController;
