const fs = require('fs')

const shortenUrl = (url, host) => {
  const timestamp = Date.now()

  const mappedUrl = {
    originalUrl: url,
    shortUrl: `${host}/${timestamp}`,
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

  return timestamp
}

const getUrls = () => {
  try {
    let rawData = fs.readFileSync('data/urls.json', 'utf8')
    return JSON.parse(rawData)
  } catch (e) {
    throw new Error('failed to read URLs from data/urls.json')
  }
}

module.exports = {
  shortenUrl,
  getUrls,
}
