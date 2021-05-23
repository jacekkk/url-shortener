const express = require('express')
const { getShortenedUrl } = require('./controllers')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('dist'))
app.post('/api/shortenUrl', getShortenedUrl)

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}`)
)
