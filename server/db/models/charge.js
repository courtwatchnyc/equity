const Sequelize = require('sequelize')
const db = require('../db')


const Charge = db.define('charge', {
    topCharge: {
        //fill in array of all charges later
        //create model method to populate charge type
        type: Sequelize.ENUM('Y', 'N')
    },
    chargeType: {
        type: Sequelize.ENUM('fill me in')
    },
    additionalCharges: {
        type: Sequelize.ENUM('Y', 'N', 'Not Sure')
    },
    domesticViolence: {
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
