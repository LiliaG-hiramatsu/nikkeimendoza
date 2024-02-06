/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom";

export default function Label({ option }) {
    return (
        <div
        className="hidden 
            md:flex md:items-center md:gap-4
            lg:gap-8"
        >
        {option.map((each) => (
            <Anchor
            key={each.to}
            to={each.to}
            className="font-bold text-center text-[14px]
                        md:text-[20px]
                        lg:text-[24px]
                        min-[2000px]:text-[28px]
                        min-[2500px]:text-[32px]"
            >
            {each.title}
            </Anchor>
        ))}
        </div>
    );
}
