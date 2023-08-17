const sequelize=require('../util/database');
const Sequelize=require('sequelize');

const Toffee=sequelize.define('toffee',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    title:Sequelize.STRING,
    about:Sequelize.STRING,
    quant:Sequelize.INTEGER
})
module.exports=Toffee;