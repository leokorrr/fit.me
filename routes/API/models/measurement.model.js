const mongoose = require('mongoose')

const measurementsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  weight: Number,
  waist: Number,
  date: Date
})

module.exports = mongoose.model('Measurements', measurementsSchema)