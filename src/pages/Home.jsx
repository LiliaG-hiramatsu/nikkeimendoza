export default function Home() {
    return (
        <main className="grow flex flex-col items-center">
            <div className="w-full h-screen bg-cover bg-center bg-[url('/data/random-image.jpg')] relative opacity-75
                        md:bg-[url('/data/portada1.jpg')]
                        lg:bg-[url('/data/portada-xl.jpg')]">
            </div>
            <div className="w-full absolute inset-x-1/2 inset-y-1/4 translate-y-1/2 -translate-x-1/2 z-10
                        md:-translate-y-4
                        lg:translate-y-1/2">
                <h1 className="text-[32px] text-center font-extrabold
                        md:text-[36px]
                        lg:text-[48px]
                        xl:text-[56x]
                        2xl:text-[64px]
                        min-[2500px]:text-[80px]">
                        Asociación Nikkei Mendoza
                </h1>
                <h1 className="text-[32px] text-center font-extrabold
                        md:text-[36px]
                        lg:text-[48px]
                        xl:text-[56x]
                        2xl:text-[64px]
                        min-[2500px]:text-[80px]">
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
                </div>
            </div>
        </main>
    )
}
