const modelPessoa = require("../pessoas/modelPessoa");

module.exports = {
  async buscarUm(id) {
    const response = await modelPessoa
      .findOne({
        where: { id: id },
      })
      .then((pessoa) => {
        if (pessoa != undefined && pessoa != null) {
          return pessoa;
        } else {
          throw "esse usuario não existe";
        }
      })
      .catch((e) => {
        return { msgError: "Esse usuario não existe" };
      });

    return response;
  },

  async criarPessoa(nome, cpf, saldo) {
    const response = await modelPessoa.findOne({ where: { cpf: cpf } }).then((usuarioExistente) => {
      if (usuarioExistente == undefined) {
        modelPessoa
          .create({
            nome: nome,
            cpf: cpf,
            saldo: saldo,
          })
      }
    })
    return response;
  },
  async buscarCpf(cpf) {
    const cpfPessoa = await modelPessoa.findOne({ where: { cpf: cpf } });
    return cpfPessoa;
  },
  async editar(id, nome) {
    const response = await modelPessoa.findOne({ where: { id: id } }).then((pessoa) => {
      if (pessoa != undefined) {
        pessoa
          .update({
            nome: nome
          }).catch(erro => {
            return { msgError: "esse id não existe no banco" }
          })
      }
    });
  },
  async transferir(id, transferir, idDestinatario) {
    const remetente = await modelPessoa
      .findOne({
        where: { id: id },
      });

    const destinatario = await modelPessoa
      .findOne({ where: { id: idDestinatario } });

  

    if (remetente && destinatario) {
      remetente.saldo -= transferir;
 
      if (remetente.saldo >= 0) {
        remetente.update({
          saldo: remetente.saldo,
        })
      }
      else {
        return {
          msgError:
            "Você não tem saldo suficiente para realizar essa transação",
        };
      }

      destinatario.saldo += transferir;
      destinatario.update({saldo:destinatario.saldo});

      return {remetente:remetente,
      destinatario:destinatario}
    }
    else{
      return {
        msgError:
          "Dados incorretos"
      };
    }
    
  },
  async deposito(id,deposito){
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
          } else {
            return {
              msgError: "O limite para deposito é de 2000 R$",
            };
          }
        }
        else{
          return {msgError:"Esse id não existe"};
        }
      });
  },

  async deletar(id){
    modelPessoa.findOne({ where: { id: id } }).then((pessoa) => {
      if (pessoa != undefined) {
        pessoa.destroy();
        return {msg:"Usuario excluido com sucesso!"};
      } else {
        return { msgError: "Esse id não existe no banco" };
      }
    });
  }
}