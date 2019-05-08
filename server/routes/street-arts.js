// server/routes/street-arts.js
const express = require('express');
const StreetArt = require("../models/StreetArt")
const Cloudinary = require("../configs/cloudinary")

const router = express.Router();

// Route to get all Street Art
router.get('/', (req, res, next) => {
  StreetArt.find()
    .then(streetart => {
      res.json(streetart);
    })
    .catch(err => next(err))
});

// Route to get Street Art by ID
router.get('/:streetArtId', (req,res,next) => {
  StreetArt.findById(req.params.streetArtId)
    .then(streetart => {
      if(streetart) {
        res.json({
          success: true,
          streetart
        })
      }
      else {
        next({
          status: 400,
          message:'There is no streetArt with the id: '+ req.params.streetArtId
        })
      }
    })
    .catch(err => next(err))
})

router.post('/', Cloudinary.single("picture"), (req, res, next) => {
  let { lat, lng } = req.body
  let pictureUrl = req.file.url
  StreetArt.create({ lat, lng, pictureUrl })
    .then(streetart => {
      res.json({
        success: true,
        streetart
      });
    })
    .catch(err => next(err))
});

module.exports = router;