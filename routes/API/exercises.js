const express = require('express')
const mongoose = require('mongoose')
const Exercise = require('./models/exercise.model')

const router = express.Router()
router.route('/exercises')
  .get((req, res, next) => {
    Exercise.find()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json({error: err})
      })
  })
  .post((req, res, next) => {
    const exercise = new Exercise({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        results: req.body.results,
        defaultReps: req.body.defaultReps
    })
    exercise.save()
      .then(data => {
        res.status(201).json({
          message: 'POST request to /exercises',
          addedExercise: data
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({error: err})
      })
  })
router.route('/exercises/:exerciseId')
  .patch((req, res, next) => {
    const id = req.params.exerciseId
    const updateOperations = {}
    req.body.map(operations => updateOperations[operations.propName] = operations.value)
    Exercise.update({_id: id}, {$set: updateOperations})
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json({error: err})
      })
  })
  .delete((req, res, next) => {
    const id = req.params.exerciseId
    Exercise.remove({_id: id})
      .then(data => {res.status(200).json(data)})
      .catch(err => {
        res.status(500).json({error: err})
      })
  })

module.exports = router
