import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Context from './utils/context/UserAuthContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Context>
  <BrowserRouter>
    <App />
    <ToastContainer/>
  </BrowserRouter>
  </Context>
 
)
