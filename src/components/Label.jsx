/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom";

export default function Label({ option }) {
    return (
        <div className="hidden
        md:flex md:justify-between md:items-center">
            <div
            className="hidden
                md:flex md:justify-start"
            >
                <img 
                    src="/public/data/logo.jpg" 
                    alt="Logo"
                    className="w-[100px] rounded-full" 
                />
            </div>
            <div
            className="hidden 
                md:flex md:justify-end"
            >
            {option.map((each) => (
                <Anchor
                key={each.to}
                to={each.to}
                className="h-full text-slate-700 text-nowrap mx-1 bg-[#ffd9cf] px-3 py-2 rounded-xl hover:bg-[#ff4a4a] hover:text-white
                            md:text-[18px]
                            lg:text-[20px]
                            min-[2000px]:text-[24px]
                            min-[2500px]:text-[28px]"
                >
                {each.title}
                </Anchor>
            ))}
            </div>
        </div>
        
    );
}
