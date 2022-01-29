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
  .get((req, res, next)=> {
    Workout.findOne({_id: req.params.workoutId})
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json({error: err})
      })
  })
  .patch(async (req, res, next) => {
    const id = req.params.workoutId
    const workout = await Workout.findById(id).exec()
    if (!workout) return res.status(404).send('The exercise with the given ID was not found.')
    let query = {$set: {}}
    for (let key in req.body) {
      if (workout[key] && workout[key] !== req.body[key])
        query.$set[key] = req.body[key];
    }
    Workout.findOneAndUpdate({_id: id}, query)
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).json({error: err}))
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