import { useState } from "react"
import Display from "./Display"
import Label from "./Label"

export default function NavBar() {
    let [show, setShow] = useState(false)
    let option = [
        { to: "/", title: "Inicio"},
        { to: "/contacto", title: "Contacto"},
        { to: "/blog", title: "Blog"},
        { to: "/cursos", title: "Cursos"}
    ]
    return (
        <header className="mt-[32px] mx-[50px]
        md:mx-[100px]
        lg:mx-[80px]
        xl:mx-[120px]
        2xl:mx-[200px]
        min-[1800px]:mx-[250px]
        min-[2000px]:mx-[300px]
        min-[2500px]:mx-[400px]">
            <div
                className="flex justify-between items-center
                md:hidden"
            >
                <div className="flex flex-col items-start">
                    {show ? (
                        <Display option={option} />
                    ) : (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 cursor-pointer
                                    md:hidden"
                        onClick={() => setShow(!show)}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                        </svg>
                    )}
                </div>
            </div>
            <nav
                className="hidden
                md:w-full md:flex md:justify-between md:items-center"
            >
                <h1
                className="flex font-bold text-[28px]
                        lg:text-[32px]
                        2xl:text-[40px]
                        min-[2500px]:text-[50px]"
                >
                Asociacion Nikkei Mendoza
                </h1>
                <div className="flex justify-end">
                    <Label option={option} />
                </div>
            </nav>
        </header>
    )
}
