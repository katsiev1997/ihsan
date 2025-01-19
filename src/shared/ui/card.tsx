"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
    imageUrl: string;
    alt: string;
    title: string;
    description: string;
};

export const Card = ({ imageUrl, title, alt, description }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="w-full px-5 border-2 border-[#346C1E] rounded-[6px] bg-white flex flex-col justify-center items-center snap-center"
        >
            {!open ? (
                // Блок с изображением и заголовком
                <div className="w-[396px] h-[361px] p-5 flex flex-col items-center gap-3 transition-all">
                    <Image src={imageUrl} alt={alt} width={329} height={264} />
                    <div className="h-[1px] w-[120px] bg-[#346C1E]" />
                    <h5 className="font-bold text-[22px] text-[#346C1E]">{title}</h5>
                </div>
            ) : (
                // Блок с текстом
                <div className="w-[396px] h-[361px] p-5 flex items-center justify-center transition-all">
                    <p className="text-[#346c1e] text-xl text-center">
                        {description}
                    </p>
                </div>
            )}
        </div>
    );
};
