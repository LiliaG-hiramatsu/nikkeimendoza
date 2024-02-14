import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Afiliados from "./pages/Afiliados"
import Cursos from "./pages/Cursos"

const router = createBrowserRouter([
    {
        path: "/", 
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/index", element: <Home /> },
            { path: "/inicio", element: <Home />},
            { path: "/afiliados", element: <Afiliados /> },
            { path: "/cursos", element: <Cursos />}
        ]
    }
])

export default router