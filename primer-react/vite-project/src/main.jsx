/*import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import './styles/style1.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './styles/style1.css'
import router from './routers'

const rootEle = document.getElementById('app')
const root = createRoot(rootEle)

root.render(
  <RouterProvider router={router}/>
)
