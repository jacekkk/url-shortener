const { shortenUrl, getUrls } = require('../services')

const getShortenedUrl = (req, res) => {
  try {
    const { url, host } = req.body
    const shortenedUrl = shortenUrl(url, host)
    return res.status(200).json(shortenedUrl)
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

const fetchUrls = (req, res) => {
  try {
    const urls = getUrls()
    return res.status(200).json(urls)
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

module.exports = {
  getShortenedUrl,
  fetchUrls,
}
