import React from 'react'
import ReactDOM from 'react-dom/client'
import Location from './components/App/Location.jsx'
import App from './components/App/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Location />
    <App />
  </React.StrictMode>,
)
