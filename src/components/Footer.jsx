import { Link as Anchor } from "react-router-dom"

export default function Footer() {
    let option = [
        { to: "/", title: "Inicio" },
        { to: "/eventos", title: "Eventos" },
        { to: "/cursos", title: "Cursos" },
        { to: "/contacto", title: "Contacto" }
    ]
    return (
        <footer className="flex flex-col">
            <div className="h-[150px] flex justify-evenly items-center py-4 bg-[#ff4a4a]
                            md:h-[200px]
                            lg:h-[250px]">
                <div className="flex flex-col justify-center">
                    {option.map(each => 
                        <Anchor 
                            key={each.to}
                            to={each.to} 
                            className="text-[#fefefe] text-center text-[12px] pb-1 hover:text-black
                                        md:text-[16px]
                                        min-[2500px]:text-[18px]">
                            {each.title}
                        </Anchor>
                    )}
                </div>
                <div className="flex flex-col justify-center">
                    <ul className="list-none py-4"
                    >
                        <li>
                            <a href="https://www.instagram.com/nikkeimendoza" rel="noreferrer" target="_blank">
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 448 512"
                                className="fill-[#fefefe] mb-2 hover:fill-black">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/nikkeimendoza" rel="noreferrer" target="_blank">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1.3em"
                                viewBox="0 0 512 512"
                                className="fill-[#fefefe] mb-2 hover:fill-black"
                                >
                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@nikkeimendoza2018" rel="noreferrer" target="_blank">
                                <svg 
                                xmlns="http://www.w3.org/2000/svg"
                                height="1.3em"
                                viewBox="0 0 512 512"
                                className="fill-[#fefefe] mb-2 hover:fill-black"
                                >
                                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="h-[30px] bg-black flex justify-center">
                <p className="text-[10px] text-[#fefefe] self-center
                            md:text-[12px]">
                    &copy; 2024 Nikkei Mendoza - All rights reserved.
                </p>
            </div>
        </footer>
    )
}
