"use strict";
const { Request, Response } = require("express");
const pessoaDomain = require("../domain/pessoaDomain");
const modelPessoa = require("./modelPessoa");

module.exports = {
  async buscaTodos(Request, Response) {
    const response = await modelPessoa.findAll();
    return Response.status(200).json(response);
  },

  async buscaUm(Request, Response) {
    const response = await pessoaDomain.validaPessoa(Request.params.id);
    return Response.json(response);

  },

  async criar(Request, Response) {
    const body = { nome: Request.body.nome, cpf: Request.body.cpf, saldo: Request.body.saldo }
    const response = await pessoaDomain.validaPessoaExistente(body);
    return Response.status(201).json(response);
  },

  async editar(Request, Response) {
    const id = Request.params.id;
    const body = Request.body.nome;
    const response = await pessoaDomain.validaEditar(id, body);
    return Response.status(200).json(response);


  },

  async transferir(Request, Response) {

    const id = Request.params.id;
    const idDestinatario = Request.body.idDestinatario;
    const transferir = Request.body.transferir;

    const response = await pessoaDomain.validaTransferencia(Request.params.id, Request.body.idDestinatario, Request.body.transferir);
    return Response.json(response);
  },

  async deposito(Request, Response) {

    const response = await pessoaDomain.validaDeposito(Request.params.id, Request.body.deposito);
    return Response.json(response);
  },

  async deletar(Request, Response) {

    const response = await pessoaDomain.validaDeletar(Request.params.id);
    return response;
  },
};
