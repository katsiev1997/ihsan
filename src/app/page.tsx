import { ArrowIcon } from "@/shared/icons/arrow-icon";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <section className="gradient-top">
                <header className="w-full flex items-center justify-between max-w-[1300px] px-5 mx-auto h-[105px]">
                    <Image src="/logo.png" alt="logo" width={123} height={71} />
                    <nav>
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
                                <button className="font-medium text-[#51a132] bg-white rounded-[5px] w-[209px] h-11">
                                    СВЯЗАТЬСЯ С НАМИ
                                </button>
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
                <div className="bg-[url('/cloud.png')] bg-cover w-full max-w-[1310px] aspect-[1310/540] mx-auto mt-5 px-[100px] flex justify-center items-center">
                    <div className="w-full flex items-center justify-between">
                        <button className="rotate-180">
                            <ArrowIcon />
                        </button>
                        <div className="w-full max-w-[700px] h-[200px] flex flex-col items-center justify-between">
                            <div className="w-full max-w-[300px] flex flex-col items-center">
                                <h1 className="text-[#346c1e] text-[42px] font-semibold">Мы помогли</h1>
                                <h3 className="text-[19px] font-medium text-black">на сумму более 60 миллионов ₽ </h3>
                                <h4 className="text-[15px] font-medium text-black mt-[7px]">за 2023 и 2024 года </h4>
                            </div>
                            <button className="w-full h-10 font-bold text-xs text-white bg-[#346c1e] rounded-[5px]">помочь</button>
                        </div>
                        <button>
                            <ArrowIcon />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
