const Sequelize = require('sequelize')
const db = require('../db')

const Defendant = db.define('defendant', {
  gender: {
      type: Sequelize.ENUM('M', 'F', 'GNC', 'TM', 'TF')
  },
  race: {
      type: Sequelize.ENUM('B', 'L', 'W', 'NA', 'SA', 'EA')
  },
  age: {
      type: Sequelize.RANGE('16-24', '25-34', '35-44', '45-54', '55+')
  }
})

module.exports = Defendant

