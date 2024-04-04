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
                <Anchor
                to="/">
                    <img 
                        src="/data/logo.jpg" 
                        alt="Logo"
                        className="w-[60px] rounded-full cursor-pointer
                            lg:w-[80px]
                            xl:w-[100px]
                            min-[2500px]:w-[130px]"
                    />
                </Anchor>
            </div>
            <div
            className="hidden 
                md:flex md:justify-end"
            >
            {option.map((each) => (
                <Anchor
                key={each.to}
                to={each.to}
                className="h-full text-slate-700 text-nowrap mx-1 bg-[#ffd9cf] px-3 py-2 rounded-xl hover:bg-[#ff0a0a] hover:text-white hover:shadow-xl hover:transition-colors
                            md:text-[14px]
                            lg:text-[16px]
                            xl:text-[18px]
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
