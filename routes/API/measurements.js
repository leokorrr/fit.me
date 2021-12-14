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
        name: req.body.name,
        results: req.body.results,
        defaultReps: req.body.defaultReps
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
  .patch((req, res, next) => {
    const id = req.params.measurementId
    const updateOperations = {}
    req.body.map(operations => updateOperations[operations.propName] = operations.value)
    Measurement.update({_id: id}, {$set: updateOperations})
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json({error: err})
      })
  })
  .delete((req, res, next) => {
    const id = req.params.exerciseId
    Measurement.remove({_id: id})
      .then(data => {res.status(200).json(data)})
      .catch(err => {
        res.status(500).json({error: err})
      })
  })

module.exports = router