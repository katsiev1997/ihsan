"use client";

import Image from "next/image";
import { useState } from "react";
import { ContactWithUs } from "./contact-with-us";
import Link from "next/link";

export const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="w-full flex items-center justify-between max-w-[1300px] px-5 mx-auto h-[105px]">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={123} height={71} />
                </Link>
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
            <ContactWithUs open={open} setOpen={setOpen} />
        </>
    );
};
