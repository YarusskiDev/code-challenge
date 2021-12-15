const Sequelize = require('sequelize');

const connection = new Sequelize('codechallenge','root','masha3112',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = connection;