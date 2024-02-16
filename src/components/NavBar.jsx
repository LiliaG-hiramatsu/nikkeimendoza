import Display from "./Display"
import Label from "./Label"

export default function NavBar() {
    let options = [
        { to: "/", title: "Inicio" },
        { to: "/eventos", title: "Eventos" },
        { to: "/afiliados", title: "Afiliados" },
        { to: "/cursos", title: "Cursos" },
        { to: "/galeria", title: "Galeria de Fotos" },
        { to: "/contacto", title: "Contacto" },
        { to: "/info", title: "Sobre Nosotros" }
    ]
    return (
        <header className="mx-[10px] my-[10px]">
            <Display option={options} />
            <Label option={options} />
        </header>
    )
}
