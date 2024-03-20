export default function Eventos() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-96 bg-cover bg-center bg-[url('/data/bg-eventos-prox.jpg')] my-2">
        <h1 className="text-[28px] text-start pl-6 pt-24 text-[#fefefe] font-bold
                    md:text-[30px]
                    lg:text-[40px]
                    xl:text-[56px]">
          Proximos Eventos
        </h1>
      </div>
      
      <div className="w-full h-96 bg-cover bg-center bg-[url('/data/bg-eventos-pas.jpg')] my-2">
        <h1 className="text-[28px] text-start pl-6 pt-24 text-[#fefefe] font-bold
                    md:text-[30px]
                    lg:text-[40px]
                    xl:text-[56px]">
          Eventos Anteriores
        </h1>
      </div>
    </div>
  )
}
