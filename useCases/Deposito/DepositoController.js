class DepositoController {
  constructor(depositoUseCase) {
    this.depositoUseCase = depositoUseCase;
  }

  async handle(req, res) {
    try {
      const body = {
        id: req.params.id,
        deposito: req.body.deposito,
      };
      const pessoa = await this.depositoUseCase.execute(body);

      return res.status(201).json({ data: pessoa || {} });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
module.exports = DepositoController;
