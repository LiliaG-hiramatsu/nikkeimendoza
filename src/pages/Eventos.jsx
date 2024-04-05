import Calendario from "../components/Calendario"
import EventoCard from "../components/EventoCard"

export default function Eventos() {
  const eventos_pos = [
  {
    "id": 1,
    "img": "/data/evento_taiko.png",
    "nombre": "Exhibición de Taiko",
    "fecha": "6-04-2024"
  },
  {
    "id": 2,
    "img": "/data/almuerzo.jpg",
    "nombre": "Almuerzo de familias",
    "fecha": "13-04-24"
  },
  {
    "id": 3,
    "img": "/data/tanabata.jpg",
    "nombre": "Tanabata",
    "fecha": "7-07-2024"
  },
  {
    "id": 4,
    "img": "/data/random-image.jpg",
    "nombre": "Feria de colectividades",
    "fecha": "12-10-2024"
  }]
  const eventos_ant = [{
    "id": 11,
    "img": "/data/feria-parque-central.jpeg",
    "nombre": "Feria Parque Central",
    "fecha": "9-03-2024"
  },
  {
    "id": 12,
    "img": "/data/mendotaku2023.jpg",
    "nombre": "Mendotaku",
    "fecha": "3-12-2023"
  },
  {
    "id": 13,
    "img": "/data/random-image.jpg",
    "nombre": "Tanabata",
    "fecha": "7-07-2023"
  }]
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-96 bg-cover bg-center bg-[url('/data/bg-eventos-prox.jpg')] my-2">
        <h1 className="text-[32px] text-start pl-6 pt-24 pb-4 text-[#fefefe] font-extrabold bg-black/20
                    md:text-[36px]
                    lg:text-[48px]
                    xl:text-[56px]">
          Próximos Eventos
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-7 mx-[30px] my-0
                  md:grid-cols-2 md:gap-10 md:mx-[60px] md:my-10
                  lg:gap-20 lg:mx-[150px]
                  xl:grid-cols-3
                  min-[2000px]:mx-[300px] min-[2000px]:gap-24 min-[200px]:my-20">
        { eventos_pos?.map(each =>
          <EventoCard
            key={each.id}
            src={each.img}
            alt={each.nombre}
            name={each.nombre}
            date={each.fecha}
            id={each.id}
          />
          )
        }
      </div>
      <div className="w-[90vw] h-[450px] bg-[#e9feff] mb-5 p-2 rounded-xl shadow-xl
      md:w-[80vw] md:h-[80vh] md:p-5
      lg:w-[60vw] lg:p-10
      xl:w-[50vw]">
        <Calendario />
      </div>
      <div className="w-full h-96 bg-cover bg-center bg-[url('/data/bg-eventos-pas.jpg')] my-2">
        <h1 className="text-[32px] text-start pl-6 pt-24 pb-4 text-[#fefefe] font-extrabold bg-black/20
                    md:text-[36px]
                    lg:text-[48px]
                    xl:text-[56px]">
          Eventos Anteriores
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 my-10 mx-[30px]
                  md:grid-cols-2 md:gap-10 md:mx-[60px]
                  lg:gap-20 lg:mx-[150px]
                  xl:grid-cols-3
                  min-[2000px]:mx-[300px] min-[2000px]:gap-24 min-[200px]:my-20">
        { eventos_ant?.map(each =>
          <EventoCard
            key={each.id}
            src={each.img}
            alt={each.nombre}
            name={each.nombre}
            date={each.fecha}
            id={each.id}
          />
          )
        }
      </div>
    </div>
  )
}
