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
  .get((req, res, next)=> {
    Exercise.findOne({_id: req.params.exerciseId})
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json({error: err})
      })
  })
  .patch(async (req, res, next) => {
    const id = req.params.exerciseId
    const exercise = await Exercise.findById(id).exec()
    if (!exercise) return res.status(404).send('The exercise with the given ID was not found.')
    let query = {$set: {}}
    for (let key in req.body) {
      if (exercise[key] && exercise[key] !== req.body[key])
        query.$set[key] = req.body[key];
    }
    Exercise.findOneAndUpdate({_id: id}, query)
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).json({error: err}))
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
