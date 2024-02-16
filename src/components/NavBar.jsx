import Display from "./Display"
import Label from "./Label"

export default function NavBar() {
    let options = [
        { to: "/", title: "Inicio" },
        { to: "/eventos", title: "Eventos" },
        { to: "/cursos", title: "Cursos" },
        { to: "/contacto", title: "Contacto" }
    ]
    return (
        <header className="mx-[30px] my-[10px]
        xl:mx-[50px]">
            <Display option={options} />
            <Label option={options} />
        </header>
    )
}
