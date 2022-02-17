const repoPessoa = require("../repository/pessoa");

module.exports = {
  async validaPessoa(id) {
    this.id = parseInt(id);
    
    if (typeof(this.id) === "number") {
      const usuario = await repoPessoa.buscarUm(this.id);
      if (usuario) {
        return usuario;
      }
      else {
        return { msgError: "Esse usuario não existe" };
      }
    }
    else{

      return { msgErro: "dado inconsistente" }
    }
  
  },

  async ValidaTodos(){
    const usuarios = repoPessoa.buscaTodos();
    if(usuarios){
      return usuarios;
    }
    else{
      return {msg:"erro no servidor"}
    }
  },

  ValidaCpf(cpf) {
    return repoPessoa.buscarCpf(cpf);
  },

  async validaPessoaExistente({ nome, cpf, saldo }) {
    this.nome = nome;
    this.cpf = parseInt(cpf);
    this.saldo = parseInt(saldo);

    if(typeof(this.nome)==="string" && typeof(this.cpf)==="number"&&typeof(this.saldo==="number")){
      const responseCpf = await repoPessoa.buscarCpf(this.cpf);

      if (responseCpf){
        return { msg: "esse CPF já tem uma conta!" }
      }
      else{
        return repoPessoa.criarPessoa(this.nome, this.cpf, this.saldo);
      }
    
    }


  },

  async validaEditar(id, nome) {

    this.id = parseInt(id);
    this.nome = nome.toString();

    const response = await repoPessoa.editar(this.id, this.nome);
    return response;
  },

  async validaTransferencia(idRemetente, Valor, idDestinatario) {
    this.idRemetente = parseInt(idRemetente);
    this.Valor = parseFloat(Valor);
    this.idDestinatario = parseInt(idDestinatario);
   

    const response = await repoPessoa.transferir(this.idRemetente, this.Valor, this.idDestinatario);
 
    return response;
  },

  async validaDeposito(id, deposito) {

    this.id = parseInt(id);
    this.deposito = parseFloat(deposito);

    if (isNaN(this.id) || isNaN(this.deposito)) {
      return { msgErro: "valores inconsistentes" }
    }

    if (typeof (this.id) === 'number' && typeof (this.deposito === 'number')) {
      const response = await repoPessoa.deposito(this.id, this.deposito);
      return response;

    }
    else {
      return { msgErro: "valores inconsistentes" }
    }
  },

  async validaDeletar(id) {
    this.id = parseInt(id);

    if (isNaN(this.id)) {
      return { msgErro: "valores inconsistente" }
    }

    if (typeof (this.id) === 'number') {
      const response = await repoPessoa.deletar(this.id);
      return response;
    }
    else {
      return { msgErro: " id inconsistente" }
    }
  }




};
