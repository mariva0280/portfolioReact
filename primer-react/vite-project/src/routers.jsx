import { createBrowserRouter } from "react-router-dom"
import { App } from './App'
import { Home } from './pages/Home'
import { Estudios } from './pages/Estudios'
import { Proyectos } from "./pages/Proyectos"
import { Habilidades } from "./pages/Habilidades"
import { Contacto } from "./pages/Contacto"

const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children:[
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/estudios',
                element: <Estudios />,
            },
            {
                path: '/proyectos',
                element: <Proyectos />,
            },
            {
                path: '/skills',
                element: <Habilidades />,
            },
            {
                path: '/contact',
                element: <Contacto />,
            },
        ]
    }
])
export default router