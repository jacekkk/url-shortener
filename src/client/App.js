import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './app.css'

import UrlShortener from './components/UrlShortener'

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={UrlShortener} />
    </BrowserRouter>
  )
}

export default App
