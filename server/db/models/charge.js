const Sequelize = require('sequelize')
const db = require('../db')


const Charge = db.define('charge', {
    top_charge: {
        //fill in array of all charges later
        //create model method to populate charge type
        type: Sequelize.ENUM('Y', 'N')
    },
    charge_type: {
        type: Sequelize.ENUM()
    },
    additional_charges: {
        type: Sequelize.ENUM('Y', 'N', 'Not Sure')
    },
    domestic_violence: {
        type: Sequelize.ENUM('Y', 'N', 'Not Sure')
    },
    felony: {
        type: Sequelize.ENUM('Y', 'N', 'Not Sure')
    },
    notes: {
        type: Sequelize.TEXT
    },
  })

module.exports = Charge
