import React from "react";
import { ArrowIcon } from "@/shared/icons/arrow-icon";

export const SectionOne = () => {
    return (
        <section>
            <div className="bg-[url('/cloud.png')] bg-cover w-full max-w-[1310px] aspect-[1310/540] mx-auto mt-5 px-5 lg:px-[100px] flex justify-center items-center">
                <div className="w-full flex items-center justify-between">
                    <button className="rotate-180">
                        <ArrowIcon />
                    </button>
                    <div className="w-full max-w-[700px] h-[150px] lg:h-[200px] flex flex-col items-center justify-between">
                        <div className="w-full max-w-[320px] flex flex-col items-center">
                            <h1 className="text-[#346c1e] text-3xl lg:text-4xl font-semibold">
                                Мы помогли
                            </h1>
                            <h3 className="text-lg lg:text-xl font-medium text-black">
                                на сумму более 60 миллионов ₽
                            </h3>
                            <h4 className="text-[15px] font-medium text-black mt-[7px]">
                                за 2023 и 2024 года{" "}
                            </h4>
                        </div>
                        <button className="w-full h-10 font-bold text-xs text-white bg-[#346c1e] rounded-[5px]">
                            помочь
                        </button>
                    </div>
                    <button>
                        <ArrowIcon />
                    </button>
                </div>
            </div>
        </section>
    );
};
