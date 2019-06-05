const Sequelize = require('sequelize')
const db = require('../db')


const CaseResolution = db.define('resolution', {
    resolve: {
        type: Sequelize.ENUM('Y', 'N')
    },
    how: {
        type: Sequelize.ENUM('Dismiss', 'Plea', 'Sentence')
    },
    pleaDetails: {
        //fill options later
        type: Sequelize.ENUM('fill me in')
    },
    sentencingDetails: {
        //fill options later
        type: Sequelize.ENUM('fill me in')
    },
  })

module.exports = CaseResolution