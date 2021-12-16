const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database");
const modelPessoa = require("./pessoas/modelPessoa");
const router = require("./routes/pessoa");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const porta = 3000;

connection
  .authenticate()
  .then(() => {
    console.log("connected to database!");
  })
  .catch((msgError) => {
    console.log(msgError);
  });

app.get("/pessoas", (req, res) => {
  modelPessoa.findAll().then((pessoas) => {
    res.statusCode = 200;
    res.json(pessoas);
  });
});

// app.use(router);
app.get("/pessoas/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400);
  } else {
    let id = parseInt(req.params.id);
    modelPessoa
      .findOne({
        where: { id: id },
      })
      .then((pessoa) => {
        if (pessoa != undefined) {
          res.statusCode = 200;
          res.json(pessoa);
        } else {
          res.sendStatus(404);
        }
      });
  }
});

app.post("/pessoas/create", (req, res) => {
  let nome = req.body.nome;
  let cpf = req.body.cpf;
  let saldo = req.body.saldo;
  modelPessoa.findOne({ where: { cpf: cpf } }).then((usuarioExistente) => {
    if (usuarioExistente == undefined) {
      modelPessoa
        .create({
          nome: nome,
          cpf: cpf,
          saldo: saldo,
        })
        .then(() => {
          res.sendStatus(200);
        })
        .then(() => {
          res.statusCode = 200;
        });
    } else {
      res.json({
        msgError:
          "Você já tem uma conta, caso não lembre sua senha, entre em contato com suporte",
      });
    }
  });
});

app.put("/pessoas/:id", (req, res) => {
  let id = parseInt(req.params.id);

  modelPessoa.findOne({ where: { id: id } }).then((pessoa) => {
    if (pessoa != undefined) {
      pessoa
        .update({
          cpf: req.body.cpf,
        })
        .then((pessoa) => {
          if (pessoa != undefined) {
            res.statusCode = 200;
            res.json(pessoa);
          } else {
            res.sendStatus(404);
          }
        });
    } else {
      res.json({
        msgError: "esse id não existe no banco",
      });
    }
  });
});

app.put("/pessoas/:id/transferir", (req, res) => {
  let id = parseInt(req.params.id);
  let idDestinatario = parseInt(req.body.idDestinatario);
  const transferir = req.body.transferir;

  modelPessoa
    .findOne({
      where: { id: id },
    })
    .then((pessoa) => {
      if (pessoa != undefined) {
        pessoa.saldo -= transferir;
        console.log(pessoa.saldo);
        if (pessoa.saldo >= 0) {
          pessoa.update({
            saldo: pessoa.saldo,
          });
          res.statusCode = 200;
          res.json(pessoa);
        } else {
          return res.json({
            msgError:
              "Você não tem saldo suficiente para realizar essa transação",
          });
        }
      }
      modelPessoa
        .findOne({ where: { id: idDestinatario } })
        .then((destinatario) => {
          console.log(destinatario);
          destinatario.saldo += transferir;
          destinatario.update({
            saldo: destinatario.saldo,
          });
        });
    });
});

app.put("/pessoa/:id/deposito", (req, res) => {
  let id = parseInt(req.params.id);
  const deposito = req.body.deposito;

  modelPessoa
    .findOne({
      where: { id: id },
    })
    .then((pessoa) => {
      if (pessoa != undefined) {
        pessoa.saldo += deposito;
        if (deposito <= 2000) {
          pessoa.update({
            saldo: pessoa.saldo,
          });
          res.statusCode = 200;
          res.json(pessoa);
        } else {
          return res.json({ msgError: "O limite para deposito é de 2000 R$" });
        }
      }
    });
});

app.delete("/pessoas/:id", (req, res) => {
  let id = parseInt(req.params.id);
  modelPessoa.findOne({ where: { id: id } }).then((pessoa) => {
    if (pessoa != undefined) {
      pessoa.destroy();
    }
  });
});

app.listen(porta, () => {
  console.log("Api is working");
});
