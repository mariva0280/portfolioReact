
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './common/ThemeContext'
import './styles/style1.css'
import router from './routers'

const rootEle = document.getElementById('app')
const root = createRoot(rootEle)

root.render(
  <RouterProvider router={router}/>
)
