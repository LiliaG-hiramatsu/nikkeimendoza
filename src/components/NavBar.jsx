import { useState } from "react"
import { Link as Anchor } from "react-router-dom"

export default function NavBar() {
    const [show, setShow] = useState(false)
    return (
        <header className="mt-[32px] mx-[50px]
        md:mx-[100px]
        lg:mx-[80px]
        xl:mx-[120px]
        2xl:mx-[200px]
        min-[1800px]:mx-[250px]
        min-[2000px]:mx-[300px]
        min-[2500px]:mx-[400px]">
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-[30px] h-[30px]"
            onClick={()=>setShow(!show)}
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" 
                />
            </svg>
            {show ? (
                <div className="flex ms-5">
                    <Anchor to="/" className="text-[20px] px-2 bg-blue-50 rounded-xl w-[100px] text-center mx-1">Inicio</Anchor>
                    <Anchor to="/afiliados" className="text-[20px] px-2 bg-blue-50 rounded-xl w-[100px] text-center mx-1">Afiliados</Anchor>
                    <Anchor to="/cursos" className="text-[20px] px-2 bg-blue-50 rounded-xl w-[100px] text-center mx-1">Cursos</Anchor>
                    <Anchor to="/" className="text-[20px] px-2 bg-blue-50 rounded-xl w-[100px] text-center mx-1">Galeria de fotos</Anchor>
                    <Anchor to="/" className="text-[20px] px-2 bg-blue-50 rounded-xl w-[100px] text-center mx-1">Contacto</Anchor>
                    <Anchor to="/" className="text-[20px] px-2 bg-blue-50 rounded-xl w-[100px] text-center mx-1">Sobre nosotros</Anchor>
                </div>
            ) : (
                null
            )}
        </header>
    )
}
