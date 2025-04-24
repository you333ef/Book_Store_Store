import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MYCONTEXT_Providing } from './Componants/Context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MYCONTEXT_Providing>
    <App />
    </MYCONTEXT_Providing>
  </StrictMode>,
)
