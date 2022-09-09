const express = require('express')
const connect = require('./config/db')

const app = express()
// const router = express.Router();
const cors = require('cors')
require('dotenv').config()
const { Lectures, router } = require('./controllers/Lectures.controller')
const { register, login } = require('./controllers/auth.controller')

app.use(cors())
app.use(express.json())
require('dotenv').config()
app.post('/register', register)
app.post('/login', login)
app.use('/', router)

const PORT = process.env.PORT || 8080

app.listen(PORT, async () => {
  try {
    await connect()
  } catch (error) {
    console.log('err')
  }
  console.log(`listing ${PORT}`)
})