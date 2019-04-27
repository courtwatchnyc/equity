const Sequelize = require('sequelize')
const db = require('../db')


const PleaDiscussion = db.define('plea', {
    da_say: {
        type: Sequelize.ENUM('Dismiss', 'No Offer or Recommendation', 'Offer/Recommendation')
    },
    offer_recommendation: {
        //fill options later
        type: Sequelize.ENUM('fill me in')
    },
  })

module.exports = PleaDiscussion