import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './style/main.scss'
import './style/tailwind.scss'
import { Provider as StyletronProvider } from 'styletron-react'
import { Client as Styletron } from 'styletron-engine-atomic'

// 1. Create a client engine instance
const engine = new Styletron()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StyletronProvider value={engine} debugAfterHydration>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </StyletronProvider>,
)
