const { shortenUrl, getUrls, getRedirectUrl } = require('../services')

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

const fetchUrl = (req, res) => {
  try {
    const path = req.protocol + '://' + req.get('host') + req.originalUrl
    const redirectUrl = getRedirectUrl(path)

    if (redirectUrl) {
      return res.status(301).redirect(redirectUrl)
    }

    return res.status(404).json({ error: 'URL does not exist' })
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

module.exports = {
  getShortenedUrl,
  fetchUrls,
  fetchUrl,
}
