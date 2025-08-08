import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

export const userContext=createContext();
createRoot(document.getElementById('root')).render(
 <userContext.Provider value={'Sreya'}>
  <StrictMode>
    <App />
  </StrictMode>
  </userContext.Provider>
)
