/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom";
import { useState } from "react";

export default function Display({ option }) {
    const [show, setShow] = useState(false)  // Estado para que cada vez que haga click en una opcion del menu, este se oculte.
    // show empieza en true, entonces el menu hamburguesa esta desplegado (icono de cruz)
    // cuando show sea false (que es cuando haga click en alguna opcion del menu), se tiene que cerrar el menu (icono menu hamburguesa)
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    {show ? (
                        <>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8 cursor-pointer {`${show ? 'block' : 'hidden'}`}
                                        md:hidden"
                            onClick={() => setShow(!show)}
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                            </svg>
                            <div className="w-fit flex flex-col justify-between
                                md:hidden">
                                {option.map((each) => (
                                    <Anchor
                                        key={each.to}
                                        to={each.to}
                                        className="text-[14px] text-slate-700 text-nowrap mx-1 my-1 bg-[#ffd9cf] px-3 py-2 rounded-xl hover:bg-[#ff0a0a] hover:text-white hover:shadow-xl hover:transition-colors"
                                        onClick={() => setShow(!show)}>
                                        {each.title}
                                    </Anchor>
                                ))}
                            </div>
                        </>
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
                <div>
                    <Anchor
                    to="/">
                        <img 
                            src="/data/logo.jpg" 
                            alt="Logo"
                            className="w-[60px] rounded-full cursor-pointer
                                md:hidden"
                        />
                    </Anchor>
                </div>
            </div>
        </>
    );
}
