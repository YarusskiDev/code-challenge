const { Router } = require('express');
const PessoaController = require('../Controllers/PessoaController');
const appRouter = Router();


appRouter.get("/pessoas",PessoaController.buscaTodos);
appRouter.get("/pessoas/:id",PessoaController.buscaUm);
appRouter.post("/pessoas",PessoaController.criar);
appRouter.put("/pessoas/:id",PessoaController.editar);
appRouter.put("/pessoas/:id/transferir",PessoaController.transferir);
appRouter.put("/pessoas/:id/depositar",PessoaController.deposito);
appRouter.delete("/pessoas/:id/deletar",PessoaController.deletar);



module.exports = appRouter;