"use strict";
const Sequelize = require("sequelize");

const connection = new Sequelize("codechallenge", "root", "ChapeuzinhoVermelhoEsteveAqui", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
