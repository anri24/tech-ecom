import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { ContextProvider } from './contexts/ContextProvicer.jsx'

import { GoogleOAuthProvider } from '@react-oauth/google';
const clientId = '814694851938-tkoqskgsd5balrbbchkrlree8du01mkj.apps.googleusercontent.com'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
