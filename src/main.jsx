import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,  Router, Route, Link} from 'react-router-dom';

import App from './App'
import { HeroesApp } from './HeroesApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>,
)
