import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Eventos from "./pages/Eventos";
import Afiliados from "./pages/Afiliados"
import Cursos from "./pages/Cursos"
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/", 
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/index", element: <Home /> },
            { path: "/inicio", element: <Home /> },
            { path: "/eventos", element: <Eventos /> },
            { path: "/afiliados", element: <Afiliados /> },
            { path: "/cursos", element: <Cursos /> },
            { path: "/galeria", element: <Galeria /> },
            { path: "/contacto", element: <Contacto /> },
            { path: "/info", element: <Info /> },
            { path: "/", element: <NotFound /> }
        ]
    }
])

export default router