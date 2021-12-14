const express = require('express')
const mongoose = require('mongoose')
const Workout = require('./models/workout.model')

const router = express.Router()
router.route('/workouts')
  .get((req, res, next) => {
    Workout.find()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json({error: err})
      })
  })
  .post((req, res, next) => {
    const workout = new Workout({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        date: req.body.date,
        exercises: req.body.exercises
    })
    workout.save()
      .then(data => {
        res.status(201).json({
          message: 'POST request to /workouts',
          addedWorkout: data
        })
      })
      .catch(err => {
        res.status(500).json({error: err})
      })
  })
router.route('/workouts/:workoutId')
  .patch((req, res, next) => {
    const id = req.params.workoutId
    const updateOperations = {}
    req.body.map(operations => updateOperations[operations.propName] = operations.value)
    Workout.update({_id: id}, {$set: updateOperations})
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json({error: err})
      })
  })
  .delete((req, res, next) => {
    const id = req.params.workoutId
    Workout.remove({_id: id})
      .then(data => {res.status(200).json(data)})
      .catch(err => {
        res.status(500).json({error: err})
      })
  })

module.exports = router