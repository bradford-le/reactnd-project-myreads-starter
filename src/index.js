import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom' //For routing in URL address bar

ReactDOM.render(
<BrowserRouter><App /></BrowserRouter>, 
document.getElementById('root')
)

// BrowserRouter wraps App component to listen to URL changes in address bar