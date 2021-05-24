const express = require('express')
const { getShortenedUrl, fetchUrls, fetchUrl } = require('./controllers')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('dist'))
app.post('/api/shortenUrl', getShortenedUrl)
app.get('/api/urls', fetchUrls)
app.get('/api/:id', fetchUrl)

app.listen(process.env.PORT || 8080, () =>
  console.log(`Server listening on port ${process.env.PORT || 8080}`)
)
