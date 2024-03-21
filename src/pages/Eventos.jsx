import Calendario from "../components/Calendario"
import EventoCard from "../components/EventoCard"

export default function Eventos() {
  const eventos_pos = [
  {
    "id": 1,
    "img": "/data/random-image.jpg",
    "nombre": "Concierto de Taiko",
    "fecha": "6-04-2024"
  },
  {
    "id": 2,
    "img": "/data/random-image.jpg",
    "nombre": "Feria Nikkei",
    "fecha": "23-06-24 y 24-06-2024"
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
        <h1 className="text-[28px] text-start pl-6 pt-24 text-[#fefefe] font-bold
                    md:text-[30px]
                    lg:text-[40px]
                    xl:text-[60px]">
          Próximos Eventos
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 my-10 mx-[30px]
                  md:grid-cols-2 md:gap-7 md:mx-[60px]
                  lg:grid-cols-2 lg:gap-10 lg:mx-[100px]">
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
      <div className="w-[60vw] h-[80vh] bg-[#e9feff] mb-5 p-10 rounded-xl shadow-xl">
        <Calendario />
      </div>
      <div className="w-full h-96 bg-cover bg-center bg-[url('/data/bg-eventos-pas.jpg')] my-2">
        <h1 className="text-[28px] text-start pl-6 pt-24 text-[#fefefe] font-bold
                    md:text-[30px]
                    lg:text-[40px]
                    xl:text-[60px]">
          Eventos Anteriores
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 my-10 mx-[30px]
                  md:grid-cols-2 md:gap-7 md:mx-[60px]
                  lg:grid-cols-3 lg:gap-10 lg:mx-[100px]">
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
