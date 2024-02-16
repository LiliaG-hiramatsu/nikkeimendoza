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
                    className="w-[60px] rounded-full
                        lg:w-[100px]" 
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
                            md:text-[14px]
                            lg:text-[18px]
                            min-[2000px]:text-[22px]
                            min-[2500px]:text-[24px]"
                >
                {each.title}
                </Anchor>
            ))}
            </div>
        </div>
        
    );
}
