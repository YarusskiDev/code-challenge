const PessoasSchema = require("./PessoasSchema");
class PessoasRepository {
  async buscarUm(id) {
    const usuario = await PessoasSchema.findOne({ where: { id: id } });
    return usuario;
  }

  async buscaTodos() {
    const usuarios = await PessoasSchema.findAll();
    return usuarios;
  }

  async criarPessoa(nome, cpf, saldo) {
    const response = await PessoasSchema.create({
      nome: nome,
      cpf: cpf,
      saldo: saldo,
    });

    return response;
  }
  async buscarCpf(cpf) {
    const cpfPessoa = await PessoasSchema.findOne({ where: { cpf: cpf } });
    return cpfPessoa;
  }
  async editar(id, nome) {
    const response = await PessoasSchema.findOne({ where: { id: id } }).then(
      (pessoa) => {
        if (pessoa != undefined) {
          pessoa
            .update({
              nome: nome,
            })
            .catch((erro) => {
              return { msgError: "esse id não existe no banco" };
            });
        }
      }
    );
    return response;
  }
  async transferir(id, transferir, idDestinatario) {
    const remetente = await PessoasSchema.findOne({
      where: { id: id },
    });

    const destinatario = await PessoasSchema.findOne({
      where: { id: idDestinatario },
    });

    if (remetente && destinatario) {
      remetente.saldo -= transferir;

      if (remetente.saldo >= 0) {
        remetente.update({
          saldo: remetente.saldo,
        });
      } else {
        throw Error(
          "Você não tem saldo suficiente para realizar essa transação"
        );
      }

      destinatario.saldo += transferir;
      destinatario.update({ saldo: destinatario.saldo });

      return { remetente: remetente, destinatario: destinatario };
    } else {
      return {
        msgError: "Dados incorretos",
      };
    }
  }
  async deposito(id, deposito) {
    const res = await PessoasSchema.findOne({
      where: { id: id },
    }).then((pessoa) => {
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
      } else {
        return { msgError: "Esse id não existe" };
      }
    });
    return res;
  }

  async deletar(id) {
    PessoasSchema.findOne({ where: { id: id } }).then((pessoa) => {
      if (pessoa != undefined) {
        pessoa.destroy();
        return { msg: "Usuario excluido com sucesso!" };
      } else {
        return { msgError: "Esse id não existe no banco" };
      }
    });
  }
}
module.exports = PessoasRepository;
