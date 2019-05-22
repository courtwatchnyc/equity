const Sequelize = require('sequelize')
const db = require('../db')


const BailDefense = db.define('bail_defense', {
    bail_type: {
        type: Sequelize.ENUM('Cash', 'Bond', 'Other')
    },
    bail_amount: {
        type: Sequelize.INTEGER
    },
    ROR: {
        type: Sequelize.ENUM('Y', 'N')
    },
    remand: {
        type: Sequelize.ENUM('Y', 'N')
    },
    supervised_release: {
        type: Sequelize.ENUM('Y', 'N')
    },
    order_of_protection: {
        //fill options later
        type: Sequelize.ENUM('Full', 'Limited', 'None')
    },
  })

module.exports = BailDefense