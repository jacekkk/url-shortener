import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './app.css'
import axios from 'axios'

import UrlShortener from './components/UrlShortener'

const App = () => {
  const [urlRedirect, setUrlRedirect] = useState()

  useEffect(() => {
    const fetchStoredUrls = async () => {
      const { data } = await axios.get('/api/urls')
      const existingRedirect = data.find(
        (urlMap) => urlMap.shortUrl === window.location.href
      )

      if (existingRedirect) {
        setUrlRedirect(existingRedirect.originalUrl)
      }
    }

    fetchStoredUrls()
  }, [])

  if (urlRedirect) {
    window.location.href = urlRedirect
  }

  return (
    <BrowserRouter>
      <Route path="/" component={UrlShortener} />
    </BrowserRouter>
  )
}

export default App
