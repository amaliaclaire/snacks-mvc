const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.disable('x-powered-by')
app.use(morgan('dev'))
app.use(bodyParser.json())

const snacksRoutes = require('./src/routes/snacks')
app.use('/snacks', snacksRoutes)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({error: err})
})

const listener = () => console.log(`Listening on port ${port}`);
app.listen(port, listener)

app.use((req, res, next) => {
  res.status(404).json({error: {message: 'not found.'}})
})
