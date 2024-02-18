export default function Home() {
    return (
        <main className="grow flex flex-col items-center">
            <h1 className="w-full bg-[#ff4a4a] text-[14px] text-white text-center
                md:text-[18px]
                lg:text-[30px]">
                Asociación Nikkei Mendoza
            </h1>
            <img className="w-full h-96 object-cover contrast-125" src="/data/portada.jpg" alt="portada" />
            <div className="w-3/5 flex flex-col my-6 text-[#333]">
                <div className="my-5">
                    <h1 className="text-[14px] self-start mb-1
                    md:text-[18px]
                    lg:text-[28px]">Asociación civil Nikkei Mendoza</h1>
                    <p className="text-[12px] 
                        md:text-[14px]
                        xl:text-[18px]">
                        La Asociación Nikkei Mendoza es una organización de la sociedad civil que nuclea a japoneses, descendientes de japoneses y amantes de la cultura japonesa.
                        Se ha comenzado a reunir en diciembre de 2017 y mantiene reuniones periódicas entre sus integrantes, ya sea organizativas, para disfrutar y conocerse entre las familias y recepciones de funcionarios de la Embajada del Japón en Argentina, visitas formales o informales.
                        La Asociación Nikkei Mendoza forma parte integrante de la Federación de Asociaciones Nikkei en la Argentina, que funciona en Buenos Aires. 
                        Tiene la personería jurídica desde 2021 y recientemente logramos tener CUIT.
                    </p>
                </div>
                <div className="my-5">
                    <h2 className="text-[13px] self-start mb-1
                        md:text-[16px]
                        lg:text-[22px]">Objetivos de la asociación</h2>
                    <ol className="list-[lower-alpha]">
                        <li className="text-[12px] 
                        md:text-[14px]
                        xl:text-[18px]">Promover la cultura japonesa;</li>
                        <li className="text-[12px] 
                        md:text-[14px]
                        xl:text-[18px]">Promover la confraternidad y bienestar de los socios;</li>
                        <li className="text-[12px] 
                        md:text-[14px]
                        xl:text-[18px]">Fomentar el acercamiento de los residentes japoneses en la Provincia de Mendoza, con la Embajada y con todos los habitantes de este país.</li>
                        <li className="text-[12px] 
                        md:text-[14px]
                        xl:text-[18px]">Promover la relación con Nikkei de Argentina y otras Asociaciones Panamericanas.</li>
                    </ol>
                    <p className="text-[12px] mt-3
                        md:text-[14px]
                        xl:text-[18px]">Para lograr estos fines la Asociación realiza actividades sociales, culturales, deportivas, gastronómicas, artísticas y toda otra actividad que se enmarque en el calendario japonés-argentino.</p>    
                </div>
                <div className="my-5">
                    <h1 className="text-[14px] self-start mb-1
                    md:text-[18px]
                    lg:text-[28px]">
                        Breve reseña histórica de los inmigrantes japoneses en la Provincia de Mendoza
                    </h1>
                    <p className="text-[12px]
                        md:text-[14px]
                        xl:text-[18px]">
                        Hubo dos corrientes inmigratorias bien diferenciadas: las que vinieron antes de la Segunda Guerra Mundial y las que vinieron después.
                    </p>
                </div>
                <div className="my-5">
                    <h2 className="text-[13px] self-start mb-1
                        md:text-[16px]
                        lg:text-[22px]">Mendoza Sur (General Alvear y San Rafael)</h2>
                    <p className="text-[12px]
                        md:text-[14px]
                        xl:text-[18px]">Seizo Hoshi, uno de los primeros inmigrantes, llegó en 1918. La primera Asociación se formó en 1938 cuando llegaron la mayoría de los inmigrantes japoneses de la primera corriente. Se instalaron en Real del Padre y Alvear Oeste, principalmente.
                        La Colonia Andes, creada por JICA, se fundó alrededor de 1962. Se integraron japoneses que ya estaban en Argentina, con los que comenzaron a llegar luego.
                        Por lo tanto, en el sur, hubo dos grandes grupos: el primero llegó entre 1910 y 1920. Y la Asociación Japonesa de Mendoza Sur se formó en 1938. El segundo grupo llegó después de la Segunda Guerra Mundial. Un pequeño grupo llegó a La Paz, de Mendoza, y luego se trasladó al sur.
                    </p>
                </div>
                <div className="my-5">
                    <h2 className="text-[13px] self-start mb-1
                        md:text-[16px]
                        lg:text-[22px]">Mendoza Norte (ahora Gran Mendoza o Zona Metropolitana de Mendoza)</h2>
                    <p className="text-[12px]
                        md:text-[14px]
                        xl:text-[18px]">El Norte, o sea Gran Mendoza o Zona Metropolitana, se formó con inmigrantes japoneses que llegaron también en 1918, principalmente de Okinawa. Y se organizó como en 1940 aproximadamente.
                    </p>
                </div>
                <div className="my-5">
                    <h1 className="text-[14px] self-start mb-1
                        md:text-[18px]
                        lg:text-[28px]">Asociación Nikkei Mendoza</h1>
                    <p className="text-[12px]
                        md:text-[14px]
                        xl:text-[18px]">Las dos Asociaciones que hubo dejaron de funcionar hace varias décadas.
                        Actualmente nuestra Asociación tiene su sede en el Gran Mendoza pero con posibilidades de conformar subcomisiones en General Alvear y San Rafael.
                        Entre los inmigrantes hay issei, descendientes nisei, sansei, yonsei...  
                    </p>
                </div>
            </div>
        </main>
    )
}
