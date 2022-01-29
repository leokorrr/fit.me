const express = require('express')
const mongoose = require('mongoose')
const Measurement = require('./models/measurement.model')

const router = express.Router()
router.route('/measurements')
  .get((req, res, next) => {
    Measurement.find()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json({error: err})
      })
  })
  .post((req, res, next) => {
    const measurement = new Measurement({
        _id: new mongoose.Types.ObjectId(),
        weight: req.body.weight,
        waist: req.body.waist,
        date: req.body.date
    })
    measurement.save()
      .then(data => {
        res.status(201).json({
          message: 'POST request to /measurements',
          addedMeasurement: data
        })
      })
      .catch(err => {
        res.status(500).json({error: err})
      })
  })
router.route('/measurements/:measurementId')
  .patch(async (req, res, next) => {
    const id = req.params.measurementId
    const measurement = await Measurement.findById(id).exec()
    if (!measurement) return res.status(404).send('The exercise with the given ID was not found.')
    let query = {$set: {}}
    for (let key in req.body) {
      if (measurement[key] && measurement[key] !== req.body[key])
        query.$set[key] = req.body[key];
    }
    Measurement.findOneAndUpdate({_id: id}, query)
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).json({error: err}))
  })
  .delete((req, res, next) => {
    const id = req.params.measurementId
    Measurement.remove({_id: id})
      .then(data => {res.status(200).json(data)})
      .catch(err => {
        res.status(500).json({error: err})
      })
  })

module.exports = router