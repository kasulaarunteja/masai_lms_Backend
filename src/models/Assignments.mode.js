const mongoose = require('mongoose')

const AssignmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      required: true,
    },
    Type: {
      type: String,
      required: true,
    },
    Instrutor: {
      type: String,
      required: true,
    },
    Scheduled: { type: Date, default: Date.now() },
    optional: { type: String },
  },
  {
    versionkey: false,
    timestamps: true,
  },
)

module.exports = mongoose.model('assignment', AssignmentSchema)
