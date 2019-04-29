const router = require('express').Router()
module.exports = router
const {Case, Judge, CourtRoom, Charge, PleaDiscussion, CaseResolution, Bail, Defendant} = require('../db/models')

router.get('/:caseId', async (req, res, next) => {
    try {
        //should we eager load judge, courtroom, charge details, plea, resolution and bail args here
      const caseDetails = await Case.getCaseDetails(req.params.caseId)
      res.json(caseDetails)
    } catch (err) {
      next(err)
    }
  })

router.get('/', async (req, res, next) => {
  try {
    const cases = await Case.findAll({
      attributes: ['id', 'borough', 'docket_number', 'penal_law']
    })
    res.json(cases)
  } catch (err) {
    next(err)
  }
})
