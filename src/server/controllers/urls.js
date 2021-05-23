const { shortenUrl } = require('../services')

const getShortenedUrl = (req, res) => {
  const url = req.body.url
  const shortenedUrl = shortenUrl(url)
  return res.status(200).json(shortenedUrl)
}

module.exports = {
  getShortenedUrl,
}
