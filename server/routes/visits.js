const express = require('express');
const StreetArt = require('../models/StreetArt');
const Visit = require('../models/Visit');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();

// Route protected for logged in user
router.get('/my-visits', isLoggedIn, (req, res, next) => {
  Visit.find({_user: req.user._id})
  .populate("_streetArt")
  .then( user  => {
		  res.json({
        success: true,
        user
      })
  })
  .catch(err => next(err))
});

router.post("/visits", isLoggedIn, (req, res, next) => {
  Visit.create({_user: req.user._id, _streetArt: req.body._streetArt})
    .then(visit => {
      res.json({
        success: true,
        visit
      })
    })
    .catch(err => next(err))
})

// Route to delete a visit
router.delete("/visits/:visitId", isLoggedIn, (req,res,next) => {
  Visit.findById(req.params.visitId)
  .then(visit => {
    if(visit._user.equals(req.user._id) ){
      Visit.findByIdAndRemove(req.params.visitId)
      .then(visit => {
        res.json({
          success: true,
          visit,
          message: "The visit was successfully deleted"
        })
      })
      .catch(err => next(err))
    } else {}
  }) 
})

module.exports = router;