const Sequelize = require('sequelize')
const db = require('../db')


const CourtRoom = db.define('courtroom', {
    name: {
        type: Sequelize.STRING
    },
  })

module.exports = CourtRoom
