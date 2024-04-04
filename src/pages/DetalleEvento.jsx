import { useParams } from "react-router-dom"

export default function DetalleEvento() {
    const { evento_id } = useParams()
    return (
        <div className="w-3/4 min-h-screen mt-4 self-center
        md:w-4/5
        min-[1400px]:w-3/5">
            <h1 className="text-[20px] font-semibold text-center
            lg:text-[24px]
            xl:text-[28px]">
                {evento_id}
                Título detalle del evento
            </h1>
            <p className="text-[14px] text-justify
            md:text-[16px]
            lg:text-[18px]
            xl:text-[20px]">
                Descripcion completa del evento
            </p>
            <div>
                <h1>Aca pondria una galeria de fotos del evento</h1>
            </div>
        </div>
    )
}
