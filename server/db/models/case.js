const Sequelize = require('sequelize')
const db = require('../db')
const User = require('./user')
const BailDefense = require('./bail-defense')
const BailJudge = require('./bail-judge')
const BailProsecution = require('./bail-prosecution')
const Bail = require('./bail')
const CaseResolution = require('./case-resolution')
const Charge = require('./charge')
const CourtRoom = require('./courtroom')
const Defendant = require('./defendant')
const Judge = require('./judge')
const PleaDiscussion = require('./plea-discussion')


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

//use try catch block
Case.getCaseDetails = async function (id) {
    try{
    const caseDetailsWithForeignKeys = await Case.findOne({
        where: {id}
    })
    //turn into .map function
    const judgeDetails = await Judge.findOne({
        where: {
            id: caseDetailsWithForeignKeys.judgeId
        }
    })
    const courtroomDetails = await CourtRoom.findOne({
        where: {
            id: caseDetailsWithForeignKeys.courtroomId
        }
    })
    const chargeDetails = await Charge.findOne({
        where: {
            id: caseDetailsWithForeignKeys.chargeId
        }
    })
    const pleaDetails = await PleaDiscussion.findOne({
        where: {
            id: caseDetailsWithForeignKeys.pleaId
        }
    })
    const resolutionDetails = await CaseResolution.findOne({
        where: {
            id: caseDetailsWithForeignKeys.resolutionId
        }
    })
    const bailDetails = await Bail.findOne({
        where: {
            id: caseDetailsWithForeignKeys.bailId
        }
    })
    return {caseDetailsWithForeignKeys, 
        judgeDetails, 
        courtroomDetails, 
        chargeDetails,
        pleaDetails,
        resolutionDetails,
        bailDetails}
    } catch (err) {
        console.error("Check db/models/case line 45", err.message)
    }
}
