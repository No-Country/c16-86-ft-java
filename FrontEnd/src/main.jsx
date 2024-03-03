import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//provider
import AuthProvider from './data/providers/AuthProvider.jsx'
import ColaboradorProvider from './data/providers/ColaboradorProvider.jsx'
import EstacionamientoProvider from './data/providers/EstacionamientoProvider.jsx'
import TicketProvider from './data/providers/TicketProvider.jsx'
//react router
import {RouterProvider} from 'react-router-dom'
//routes
import router from './routes/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <EstacionamientoProvider>
      <ColaboradorProvider>
        <TicketProvider>
          <RouterProvider
            router={router}
          >
          </RouterProvider>
        </TicketProvider>
      </ColaboradorProvider>
    </EstacionamientoProvider>
  </AuthProvider>
)
