const Sequelize = require('sequelize')
const db = require('../db')


const Bail = db.define('bail', {
    notes: {
        type: Sequelize.TEXT
    },
  })

module.exports = Bail