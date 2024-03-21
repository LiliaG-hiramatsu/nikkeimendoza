import { Link as Anchor } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export default function EventoCard({ src, alt, name, date, id }) {
    return (
        <div className="w-full h-auto rounded-xl overflow-hidden shadow-lg bg-[#fefefe]">
            <img src={src} alt={alt} className="aspect-[4/3] object-cover" />
            <div className="flex flex-col px-2 py-4 ml-2">
                <h1 className="py-1 px-1 font-semibold">{name}</h1>
                <p className="py-1 px-1">{date}</p>
                <Anchor to={'/detalle/'+id} className="w-1/3 py-1 self-center bg-[#8ad2d6] rounded-xl text-center hover:bg-[#74b1b4] cursor-pointer">
                    Ver más
                </Anchor>
            </div>
        </div>
    )
}
