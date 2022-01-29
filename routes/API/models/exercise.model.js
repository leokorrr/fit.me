const mongoose = require('mongoose')

const exerciseSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  results: Array,
  defaultReps: Number,
})

module.exports = mongoose.model('Exercise', exerciseSchema)