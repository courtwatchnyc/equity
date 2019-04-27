const Sequelize = require('sequelize')
const db = require('../db')


const Case = db.define('case', {
    borough: {
        type: Sequelize.ENUM('Brooklyn', 'Queens', 'Bronx', 'Staten Island', 'Manhattan')
    },
    docket_number: {
        type: Sequelize.STRING
    },
    penal_law: {
        type: Sequelize.STRING
    },
    interpreter_needed: {
        type: Sequelize.ENUM('Y', 'N')
    },
    interpreter_present: {
        type: Sequelize.ENUM('Y', 'N')
    },
    duration: {
        //fill options later
        type: Sequelize.ENUM('Under 2 Minutes', '2 - 5 Minutes', '5+ Minutes')
    },
    queens_waiver_right_grand_jury: {
        //fill options later
        type: Sequelize.ENUM('Y', 'N')
    },
  })

module.exports = Case