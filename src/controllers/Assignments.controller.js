const express = require('express')

const Assignment = require('../models/Assignments.mode')

const router = express.Router()

router.post('/assignment', async (req, res) => {
  try {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    const assignment = await Assignment.create(req.body)
    res.send(assignment)
  } catch (err) {
    return res.status(400).send(err.message)
  }
})

router.get('/assignment', async (req, res) => {
  try {
    const assignment = await Assignment.find().lean().exec()
    res.send(assignment)
  } catch (err) {
    return res.status(400).send(err.message)
  }
})

router.patch('/assignment/:id', async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    )

    return res.send(assignment)
  } catch (err) {
    return res.status(500).send(err.message)
  }
})

router.delete('/assignment/:id', async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndDelete(req.params.id)
      .lean()
      .exec()

    return res.send(assignment)
  } catch (err) {
    return res.status(500).send(err.message)
  }
})

module.exports = router
