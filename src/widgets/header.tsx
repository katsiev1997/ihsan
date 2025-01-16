"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useClickOutside } from "@/shared/hooks/use-click-outside";

export const Header = () => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useClickOutside(ref as React.RefObject<HTMLElement>, () => setOpen(false));

    return (
        <>
            <header className="w-full flex items-center justify-between max-w-[1300px] px-5 mx-auto h-[105px]">
                <Image src="/logo.png" alt="logo" width={123} height={71} />
                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-16 text-white">
                        <li>
                            <a href="#fund">О ФОНДЕ</a>
                        </li>
                        <li>
                            <a href="#programs">ПРОГРАММЫ</a>
                        </li>
                        <li>
                            <a href="#donations">СБОРЫ</a>
                        </li>
                        <li>
                            <a href="#news">НОВОСТИ</a>
                        </li>
                        <li>
                            <button
                                onClick={() => setOpen(true)}
                                className="font-medium text-[#51a132] bg-white rounded-[5px] w-[209px] h-11"
                            >
                                СВЯЗАТЬСЯ С НАМИ
                            </button>
                        </li>
                    </ul>
                </nav>
                <button
                    onClick={() => setOpen(true)}
                    className="font-medium text-[#51a132] bg-white rounded-[5px] w-[209px] h-11 lg:hidden"
                >
                    СВЯЗАТЬСЯ С НАМИ
                </button>
            </header>
            <div className="w-full bg-[rgba(52,108,30,0.52)] h-[120px]">
                <div className="w-full h-full max-w-[1300px] px-5 mx-auto flex items-center gap-14">
                    <Image src="/logo-2.png" alt="logo-2" width={75} height={90} />
                    <div className="flex flex-col gap-[30px] text-white text-xs lg:text-base">
                        <p>БЛАГОТВОРИТЕЛЬНЫЙ ФОНД РЕСПУБЛИКИ ИНГУШЕТИЯ “ИХСАН” (ИСКРЕННОСТЬ) </p>
                        <p>НАЦИОНАЛЬНЫЙ ПРОЕКТ “БЕЗЛИКИЕ”</p>
                    </div>
                </div>
            </div>
            {open && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                    <div
                        ref={ref}
                        className="flex items-center justify-center bg-white rounded-[16px] border-[3px] border-[#346C1E] w-[440px] h-[245px] z-20"
                    >
                        <div className="flex flex-col gap-3">
                            <h3 className="text-[#346C1E] text-4xl font-semibold">
                                СВЯЗАТЬСЯ С НАМИ
                            </h3>

                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1">
                                    <a target="_blank" href="https://wa.me/+79640279097">
                                        <Image
                                            src="/whatsapp.png"
                                            alt="whatsapp"
                                            width={31}
                                            height={31}
                                        />
                                    </a>
                                    <a target="_blank" href="tel:+79640279097">
                                        <Image
                                            src="/phone.png"
                                            alt="phone"
                                            width={31}
                                            height={31}
                                        />
                                    </a>
                                </div>

                                <p className="text-xl">8(964) 027-90-97</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1">
                                    <a target="_blank" href="https://wa.me/+79281113333">
                                        <Image
                                            src="/whatsapp.png"
                                            alt="whatsapp"
                                            width={31}
                                            height={31}
                                        />
                                    </a>
                                    <a target="_blank" href="tel:+79640279097">
                                        <Image
                                            src="/phone.png"
                                            alt="phone"
                                            width={31}
                                            height={31}
                                        />
                                    </a>
                                </div>

                                <p className="text-xl">8(928) 111-33-33</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
