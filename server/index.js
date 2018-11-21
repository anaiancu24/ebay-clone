const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')
const advertsRouter = require('./adverts/routes')

const app = express()
const port = process.env.PORT || 4000

app.use(cors())

app
  .use(bodyParser.json())
  .use(advertsRouter)
  .listen(port, () => console.log(`Listening on port ${port}`))