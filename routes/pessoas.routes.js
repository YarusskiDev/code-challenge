const { Router } = require("express");

const { getPessoasController } = require("../useCases/GetPessoas");
const { showPessoaController } = require("../useCases/ShowPessoa");
const { createPessoaController } = require("../useCases/CreatePessoa");
const { updatePessoaController } = require("../useCases/UpdatePessoa");
const { deletePessoaController } = require("../useCases/DeletePessoa");
const { transferirController } = require("../useCases/Transferir");
const { depositoController } = require("../useCases/Deposito");
const router = Router();

router.get("/", (req, res) => {
  getPessoasController.handle(req, res);
});
router.get("/:id", (req, res) => {
  showPessoaController.handle(req, res);
});
router.post("/", (req, res) => {
  createPessoaController.handle(req, res);
});
router.put("/:id", (req, res) => {
  updatePessoaController.handle(req, res);
});
router.post("/:id/transferir", (req, res) => {
  transferirController.handle(req, res);
});
router.post("/:id/depositar", (req, res) => {
  depositoController.handle(req, res);
});
router.delete("/:id", (req, res) => {
  deletePessoaController.handle(req, res);
});

module.exports = router;
