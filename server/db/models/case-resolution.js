const Sequelize = require('sequelize')
const db = require('../db')


const CaseResolution = db.define('resolution', {
    resolve: {
        type: Sequelize.ENUM('Y', 'N')
    },
    how: {
        type: Sequelize.ENUM('Dismiss', 'Plea', 'Sentence')
    },
    plea_details: {
        //fill options later
        type: Sequelize.ENUM()
    },
    sentencing_details: {
        //fill options later
        type: Sequelize.ENUM()
    },
  })

module.exports = CaseResolution