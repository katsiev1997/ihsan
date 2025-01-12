import React from "react";
import Image from "next/image";

type Props = {
    imageUrl: string;
    alt: string;
    title: string;
};

export const Card = ({ imageUrl, title, alt }: Props) => {
    return (
        <div className="w-full px-5 border-2 border-[#346C1E] rounded-[6px] bg-white flex justify-center items-center">
            <div className="w-[396px] h-[361px] p-5 flex flex-col items-center gap-3">
                <Image src={imageUrl} alt={alt} width={329} height={264} />
                <div className="h-[1px] w-[120px] bg-[#346C1E]" />
                <h5 className="font-bold text-[22px] text-[#346C1E]">{title}</h5>
            </div>
        </div>
    );
};
