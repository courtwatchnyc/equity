const User = require('./user')
const BailDefense = require('./bail-defense')
const BailJudge = require('./bail-judge')
const BailProsecution = require('./bail-prosecution')
const Bail = require('./bail')
const CaseResolution = require('./case-resolution')
const Case = require('./case')
const Charge = require('./charge')
const CourtRoom = require('./courtroom')
const Defendant = require('./defendant')
const Judge = require('./judge')
const PleaDiscussion = require('./plea-discussion')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

 Defendant.belongsTo(Case)
 Case.hasOne(Defendant)

 //has stores in target -- belongs to stores in source
 Judge.hasMany(Case)
CourtRoom.hasMany(Case)
Charge.hasOne(Case)
PleaDiscussion.hasOne(Case)
CaseResolution.hasOne(Case)

BailDefense.hasOne(Bail)
BailProsecution.hasOne(Bail)
BailJudge.hasOne(Bail)
Bail.hasOne(Case)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  BailDefense,
  BailJudge,
  BailProsecution,
  Bail,
  CaseResolution,
  Case,
  CourtRoom,
  Defendant,
  Judge,
  PleaDiscussion,
}
