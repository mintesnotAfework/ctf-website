import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './css/bootstrap4-neon-glow.css'
import './css/bootstrap4-neon-glow.min.css'
import './css/main.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
