const Sequelize = require('sequelize')
const db = require('../db')


const BailDefense = db.define('bail_defense', {
    bailType: {
        type: Sequelize.ENUM('Cash', 'Bond', 'Other')
    },
    bailAmount: {
        type: Sequelize.INTEGER
    },
    ROR: {
        type: Sequelize.ENUM('Y', 'N')
    },
    remand: {
        type: Sequelize.ENUM('Y', 'N')
    },
    supervisedRelease: {
        type: Sequelize.ENUM('Y', 'N')
    },
    orderOfProtection: {
        //fill options later
        type: Sequelize.ENUM('Full', 'Limited', 'None')
    },
  })

module.exports = BailDefense