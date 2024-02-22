import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//react router
import {RouterProvider} from 'react-router-dom'
//routes
import router from './routes/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider
    router={router}
  >
  </RouterProvider>,
)
