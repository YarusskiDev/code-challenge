const { Router } = require("express");
const pessoasRouter = require("./pessoas.routes");

const router = Router();

router.use("/pessoas", pessoasRouter);

module.exports = router;
