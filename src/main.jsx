import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store/store.js'
import { Provider } from 'react-redux'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Router>
    <Provider store={store}>
      <App />
    </Provider>
    </Router>
  </StrictMode>,
)
