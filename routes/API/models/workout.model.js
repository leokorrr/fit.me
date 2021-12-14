const mongoose = require('mongoose')

const workoutSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  date: Date,
  exercises: Array
})

module.exports = mongoose.model('Workout', workoutSchema)