import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Eventos from "./pages/Eventos";
import Cursos from "./pages/Cursos"
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import DetalleEvento from "./pages/DetalleEvento";

const router = createBrowserRouter([
    {
        path: "/", 
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/index", element: <Home /> },
            { path: "/inicio", element: <Home /> },
            { path: "/eventos", element: <Eventos /> },
            { path: "/cursos", element: <Cursos /> },
            { path: "/contacto", element: <Contacto /> },
            { path: "/", element: <NotFound /> },
            { path: "/detalle/:evento_id", element: <DetalleEvento /> }
        ]
    }
])

export default router