import React from "react";
import Image from "next/image";

export const Header = () => {
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
                            <button className="font-medium text-[#51a132] bg-white rounded-[5px] w-[209px] h-11">СВЯЗАТЬСЯ С НАМИ</button>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="w-full bg-[rgba(52,108,30,0.52)] h-[120px]">
                <div className="w-full h-full max-w-[1300px] px-5 mx-auto flex items-center gap-14">
                    <Image src="/logo-2.png" alt="logo-2" width={75} height={90} />
                    <div className="flex flex-col gap-[30px] text-white">
                        <p>БЛАГОТВОРИТЕЛЬНЫЙ ФОНД РЕСПУБЛИКИ ИНГУШЕТИЯ “ИХСАН” (ИСКРЕННОСТЬ) </p>
                        <p>НАЦИОНАЛЬНЫЙ ПРОЕКТ “БЕЗЛИКИЕ”</p>
                    </div>
                </div>
            </div>
        </>
    );
};
