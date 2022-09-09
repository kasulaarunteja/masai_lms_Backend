const express = require('express')

const Lectures = require('../models/Lectures.model')

const router = express.Router()

router.post('/lectures', async (req, res) => {
  try {
    const lectures = await Lectures.create(req.body)
    res.send(lectures)
  } catch (err) {
    return res.status(400).send(err.message)
  }
})

router.get('/lectures', async (req, res) => {
  try {
    const lectures = await Lectures.find().lean().exec()
    res.send(lectures)
  } catch (err) {
    return res.status(400).send(err.message)
  }
})

router.patch('/lectures/:id', async (req, res) => {
  try {
    const lectures = await Lectures.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    return res.send(lectures)
  } catch (err) {
    return res.status(500).send(err.message)
  }
})

router.delete('/lectures/:id', async (req, res) => {
  try {
    const lectures = await Lectures.findByIdAndDelete(req.params.id)
      .lean()
      .exec()

    return res.send(lectures)
  } catch (err) {
    return res.status(500).send(err.message)
  }
})

module.exports = { router }
