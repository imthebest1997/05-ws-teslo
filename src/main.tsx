import React from 'react'
import ReactDOM from 'react-dom/client'
import { TesloApp } from './TesloApp'
import { SocketProvider } from './context/SocketContext.tsx';

import "./TesloApp.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SocketProvider>
      <TesloApp />
    </SocketProvider>
  </React.StrictMode>,
)
