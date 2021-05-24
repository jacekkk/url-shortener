const fs = require('fs')

const shortenUrl = (url, host) => {
  const shortUrl = `${host}/api/${Date.now()}`

  const mappedUrl = {
    originalUrl: url,
    shortUrl,
  }

  fs.readFile('data/urls.json', 'utf8', (err, fileContent) => {
    if (err) {
      throw err
    } else {
      let data = JSON.parse(fileContent)
      data.push(mappedUrl)

      fs.writeFile(
        'data/urls.json',
        JSON.stringify(data),
        'utf8',
        function (err) {
          if (err) throw err
          console.log('URL saved as:', mappedUrl)
        }
      )
    }
  })

  return shortUrl
}

const getUrls = () => {
  try {
    let rawData = fs.readFileSync('data/urls.json', 'utf8')
    return JSON.parse(rawData)
  } catch (e) {
    throw new Error('failed to read URLs from data/urls.json')
  }
}

const getRedirectUrl = (path) => {
  try {
    const rawData = fs.readFileSync('data/urls.json', 'utf8')
    const parsedData = JSON.parse(rawData)

    const redirectUrl = parsedData.find((urlMap) => urlMap.shortUrl === path)

    return redirectUrl.originalUrl
  } catch (e) {
    throw new Error('failed to read URLs from data/urls.json')
  }
}

module.exports = {
  shortenUrl,
  getUrls,
  getRedirectUrl,
}
