import { Link as Anchor } from "react-router-dom"

export default function Footer() {
    let option = [
        { to: "/", title: "Inicio" },
        { to: "/eventos", title: "Eventos" },
        { to: "/cursos", title: "Cursos" },
        { to: "/contacto", title: "Contacto" }
    ]
    return (
        <footer className="flex flex-col items-center bg-[#ff4a4a] h-48 py-5">
                {option.map(each => 
                    <Anchor 
                        key={each.to}
                        to={each.to} 
                        className="text-white py-2 text-center text-[14px] hover:text-black">
                        {each.title}
                    </Anchor>
                )}
        </footer>
    )
}
