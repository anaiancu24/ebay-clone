const Sequelize = require('sequelize')
const sequelize = require('../db')

const Adverts = sequelize.define('adverts', {
    title:{
        type: Sequelize.STRING,
        field: "title",
        allowNull: false
     },
    price:{
        type: Sequelize.INTEGER,
        field: "price",
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
        field: "description",
        allowNull: true
    }, 
    picture:{
        type: Sequelize.STRING,
        field: "picture",
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        field: "email",
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        field: "phone",
        allowNull: false
    }
},
{
    timestamps: false,
    tableName: 'adverts' }
 )

module.exports = Adverts