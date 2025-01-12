"use client";

import React, { useState, useRef } from "react";
import { ArrowIcon } from "@/shared/icons/arrow-icon";

type Props = {
    title: string;
    children: React.ReactNode;
};

export const Accordion = ({ title, children }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div
            className={
                "w-full overflow-hidden bg-white px-9 rounded-[20px] transition-all " +
                "border-[3px] border-[#346c1e] flex flex-col items-center py-6"
            }
        >
            <div className="w-full flex items-center justify-between">
                <h3 className="text-[#2b5b18] font-semibold text-2xl uppercase">{title}</h3>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`transform transition-transform duration-300 ${isOpen ? "-rotate-90" : "rotate-90"}`}
                >
                    <ArrowIcon />
                </button>
            </div>
            <div
                ref={contentRef}
                className="w-full transition-[max-height] duration-300 ease-in-out overflow-hidden"
                style={{
                    maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0",
                }}
            >
                {children}
            </div>
        </div>
    );
};
