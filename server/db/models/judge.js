const Sequelize = require('sequelize')
const db = require('../db')


const Judge = db.define('judge', {
    name: {
        type: Sequelize.STRING
    },
  })

module.exports = Judge
