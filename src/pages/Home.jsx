export default function Home() {
    return (
        <main className="grow flex flex-col items-center">
            <h1 className="w-full bg-[#ff4a4a] text-[14px] text-white text-center
                md:text-[18px]
                lg:text-[30px]">
                Asociacion Nikkei Mendoza
            </h1>
            <img className="w-full h-96 object-cover contrast-125" src="/data/portada.jpg" alt="portada" />
            <div className="flex flex-col my-4 mx-16">
                <div className="my-5">
                    <h1 className="text-[14px] self-start
                    md:text-[18px]
                    lg:text-[28px]">Introduccion</h1>
                    <p className="text-[12px] 
                        md:text-[14px]
                        xl:text-[18px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repellat quam expedita iste, voluptatibus excepturi blanditiis voluptate nulla accusantium enim cumque eaque sunt repellendus. Odit error placeat dolorem omnis quidem!
                    </p>
                </div>
                <div className="my-5">
                    <h1 className="text-[14px] self-start
                    md:text-[18px]
                    lg:text-[28px]">
                        Como empezamos
                    </h1>
                    <p className="text-[12px]
                        md:text-[14px]
                        xl:text-[18px]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam maiores quae ratione sit perspiciatis minus tempore dolorem placeat voluptatem velit quisquam sunt libero quia repellat sint, quod non suscipit!
                    </p>
                </div>
            </div>
        </main>
    )
}
