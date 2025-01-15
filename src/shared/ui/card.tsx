"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type Props = {
    imageUrl: string;
    alt: string;
    title: string;
};

export const Card = ({ imageUrl, title, alt }: Props) => {
    const [open, setOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="w-full px-5 border-2 border-[#346C1E] rounded-[6px] bg-white flex flex-col justify-center items-center snap-center relative"
        >
            <div className="w-[396px] h-[361px] p-5 flex flex-col items-center gap-3">
                <Image src={imageUrl} alt={alt} width={329} height={264} />
                <div className="h-[1px] w-[120px] bg-[#346C1E]" />
                <h5 className="font-bold text-[22px] text-[#346C1E]">{title}</h5>
            </div>
            <div
                ref={contentRef}
                className="w-full transition-[max-height] duration-300 ease-in-out overflow-hidden"
                style={{
                    maxHeight: open ? `${contentRef.current?.scrollHeight}px` : "0",
                }}
            >
                <p className="text-[#346c1e] text-xl">
                    Мы оказываем адресную помощь малоимущим семьям, детям-сиротам, инвалидам,
                    больным, нуждающимся в лечении, и другим категориям граждан, оказавшимся в
                    трудной жизненной ситуации.
                </p>
            </div>
        </div>
    );
};
