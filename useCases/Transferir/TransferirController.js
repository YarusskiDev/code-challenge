class TransferirController {
  constructor(transferirUseCase) {
    this.transferirUseCase = transferirUseCase;
  }

  async handle(req, res) {
    try {
      const body = {
        remetente: req.params.id,
        destinatario: req.body.idDestinatario,
        valor: req.body.transferir,
      };
      const pessoa = await this.transferirUseCase.execute(body);

      return res.status(201).json({ data: pessoa || {} });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
module.exports = TransferirController;
