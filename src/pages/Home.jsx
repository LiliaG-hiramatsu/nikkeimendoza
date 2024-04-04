export default function Home() {
    return (
        <main className="grow flex flex-col items-center">
            <div className="w-full h-screen bg-cover bg-center bg-[url('/data/random-image.jpg')] relative opacity-75
                        md:bg-[url('/data/portada1.jpg')]
                        xl:bg-[url('/data/portada-xl.jpg')]">
            </div>
            <div className="w-full absolute inset-x-1/2 inset-y-1/4 translate-y-1/2 -translate-x-1/2 z-10
                        md:-translate-y-4
                        xl:translate-y-1/2">
                <h1 className="text-[28px] text-[#333] text-center font-semibold
                        md:text-[30px]
                        lg:text-[36px]
                        xl:text-[48px]
                        2xl:text-[56px]
                        min-[2500px]:text-[64px]">
                        Asociación Nikkei Mendoza
                </h1>
                <h1 className="text-[28px] text-[#333] text-center font-semibold
                        md:text-[30px]
                        lg:text-[36px]
                        xl:text-[48px]
                        2xl:text-[56px]
                        min-[2500px]:text-[64px]">
                        メンドーサ日本人会
                </h1>
            </div>
            <div className="w-4/5 flex flex-col my-6 text-[#333] text-justify
                            md:w-3/5">
                <div className="my-5">
                    <h1 className="text-[16px] self-start mb-1 font-semibold
                    md:text-[18px]
                    lg:text-[28px]
                    min-[2500px]:text-[36px]">
                    Asociación Civil Nikkei Mendoza
                    </h1>
                    <p className="text-[14px] py-2
                        md:text-[16px]
                        xl:text-[18px]
                        min-[2500px]:text-[24px]">
                        La Asociación Nikkei Mendoza es una organización de la sociedad civil que reúne a japoneses, 
                        descendientes de japoneses y entusiastas de la cultura japonesa en la región de Mendoza.
                    </p>
                    <p className="text-[14px] py-2
                        md:text-[16px]
                        xl:text-[18px]
                        min-[2500px]:text-[24px]">
                        Desde su inicio en diciembre de 2017, la asociación ha mantenido reuniones periódicas entre sus miembros, 
                        abordando tanto aspectos organizativos como oportunidades para que las familias se conozcan y disfruten juntas. 
                        Además, hemos tenido el privilegio de recibir a funcionarios de la Embajada del Japón en Argentina, así como de 
                        realizar visitas formales e informales.
                    </p>
                    <p className="text-[14px] py-2
                        md:text-[16px]
                        xl:text-[18px]
                        min-[2500px]:text-[24px]">
                        La Asociación Nikkei Mendoza es un miembro activo de la Federación de Asociaciones Nikkei en Argentina, 
                        con sede en Buenos Aires, lo que nos permite colaborar estrechamente con otras comunidades nikkei en todo el país.
                    </p>
                    <p className="text-[14px] py-2
                        md:text-[16px]
                        xl:text-[18px]
                        min-[2500px]:text-[24px]">
                        En 2021, obtuvimos la personería jurídica, un logro significativo que nos brinda mayor respaldo legal y nos 
                        permite realizar actividades con un marco formal. Recientemente, hemos alcanzado otro hito importante al 
                        obtener nuestro CUIT, lo que nos otorga la capacidad de realizar trámites y operaciones financieras de manera 
                        oficial.
                    </p>
                    <p className="text-[14px] py-2
                        md:text-[16px]
                        xl:text-[18px]
                        min-[2500px]:text-[24px]">
                        Estamos comprometidos con la promoción y preservación de la rica herencia cultural japonesa en Mendoza, 
                        y esperamos seguir creciendo y contribuyendo al fortalecimiento de los lazos entre nuestra comunidad y la 
                        sociedad en general.
                    </p>
                </div>
                <div className="my-5">
                    <h2 className="text-[14px] self-start mb-1 font-semibold
                        md:text-[16px]
                        xl:text-[18px]
                        min-[2500px]:text-[24px]">
                        Objetivos de la asociación:
                    </h2>
                    <ul className="list-disc">
                        <li className="text-[14px] 
                        md:text-[16px]
                        xl:text-[18px]
                        min-[2500px]:text-[24px]">Promover la cultura japonesa;</li>
                        <li className="text-[14px] 
                        md:text-[16px]
                        xl:text-[18px]
                        min-[2500px]:text-[24px]">Promover la confraternidad y bienestar de los socios;</li>
                        <li className="text-[14px] 
                        md:text-[16px]
                        xl:text-[18px]
                        min-[2500px]:text-[24px]">Fomentar el acercamiento de los residentes japoneses en la Provincia de Mendoza, con la Embajada y con todos los habitantes de este país.</li>
                        <li className="text-[14px] 
                        md:text-[16px]
                        xl:text-[18px]
                        min-[2500px]:text-[24px]">Promover la relación con Nikkei de Argentina y otras Asociaciones Panamericanas.</li>
                    </ul>
                    <p className="text-[14px] mt-3
                        md:text-[16px]
                        xl:text-[18px]
                        min-[2500px]:text-[24px]">Para lograr estos fines la Asociación realiza actividades sociales, culturales, deportivas, gastronómicas, artísticas y toda otra actividad que se enmarque en el calendario japonés-argentino.</p>    
                </div>
                <div className="my-5">
                    <h1 className="text-[14px] self-start mb-1 font-semibold
                    md:text-[16px]
                    xl:text-[18px]
                    min-[2500px]:text-[24px]">
                        Breve reseña histórica de los inmigrantes japoneses en la Provincia de Mendoza
                    </h1>
                    <p className="text-[14px]
                        md:text-[16px]
                        xl:text-[18px]
                        min-[2500px]:text-[24px]">
                        Hubo dos corrientes inmigratorias bien diferenciadas: las que vinieron antes de la Segunda Guerra Mundial 
                        y las que vinieron después.
                    </p>
                </div>
                <div className="my-5">
                    <h2 className="text-[14px] self-start mb-1 font-semibold
                        md:text-[16px]
                        xl:text-[18px]
                        min-[2500px]:text-[24px]">
                        Mendoza Sur (General Alvear y San Rafael)
                    </h2>
                    <p className="text-[14px]
                        md:text-[16px]
                        xl:text-[18px]
                        min-[2500px]:text-[24px]">
                        Seizo Hoshi, uno de los primeros inmigrantes, llegó en 1918. La primera Asociación se formó en 1938 cuando 
                        llegaron la mayoría de los inmigrantes japoneses de la primera corriente. Se instalaron en Real del Padre y 
                        Alvear Oeste, principalmente.
                        La Colonia Andes, creada por JICA, se fundó alrededor de 1962. Se integraron japoneses que ya estaban en Argentina, 
                        con los que comenzaron a llegar luego.
                        Por lo tanto, en el sur, hubo dos grandes grupos: el primero llegó entre 1910 y 1920. Y la Asociación Japonesa de 
                        Mendoza Sur se formó en 1938. El segundo grupo llegó después de la Segunda Guerra Mundial. Un pequeño grupo llegó a 
                        La Paz, de Mendoza, y luego se trasladó al sur.
                    </p>
                </div>
                <div className="my-5">
                    <h2 className="text-[14px] self-start mb-1 font-semibold
                        md:text-[16px]
                        xl:text-[18px]
                        min-[2500px]:text-[24px]">
                        Mendoza Norte (ahora Gran Mendoza o Zona Metropolitana de Mendoza)
                    </h2>
                    <p className="text-[14px]
                        md:text-[16px]
                        xl:text-[18px]
                        min-[2500px]:text-[24px]">
                        El Norte, o sea Gran Mendoza o Zona Metropolitana, se formó con inmigrantes japoneses que llegaron también en 1918, 
                        principalmente de Okinawa. Y se organizó como en 1940 aproximadamente.
                    </p>
                </div>
                <div className="my-5">
                    <h2 className="text-[14px] self-start mb-1 font-semibold
                        md:text-[16px]
                        xl:text-[18px]
                        min-[2500px]:text-[24px]">
                        Asociación Nikkei Mendoza
                    </h2>
                    <p className="text-[14px]
                        md:text-[16px]
                        xl:text-[18px]
                        min-[2500px]:text-[24px]">
                        Las dos Asociaciones que hubo dejaron de funcionar hace varias décadas.
                        Actualmente nuestra Asociación tiene su sede en el Gran Mendoza pero con posibilidades de conformar subcomisiones 
                        en General Alvear y San Rafael.
                        Entre los inmigrantes hay issei, descendientes nisei, sansei, yonsei...  
                    </p>
                </div>
            </div>
        </main>
    )
}
