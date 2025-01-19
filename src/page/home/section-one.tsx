"use client";

import { useState } from "react";
import { ArrowIcon } from "@/shared/icons/arrow-icon";

export const SectionOne = () => {
	const [changed, setChanged] = useState(false);
	return (
		<section>
			<div className="bg-[url('/cloud.png')] bg-cover w-full max-w-[1310px] aspect-[1310/540] mx-auto mt-5 px-5 lg:px-[100px] flex justify-center items-center">
				<div className="w-full flex items-center justify-between">
					<button onClick={() => setChanged(false)} className="rotate-180">
						<ArrowIcon />
					</button>
					<div className="w-full max-w-[700px] h-[150px] lg:h-[200px] flex flex-col items-center justify-end relative">
						<div
							className={`w-full max-w-[320px] top-0 left-1/2 flex flex-col items-center absolute transition-all duration-500 -translate-x-1/2 ${
								changed ? "-translate-x-[1500px]" : ""
							}`}
						>
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
						<div
							className={`w-full max-w-[320px] top-0 right-1/2 flex flex-col items-center absolute transition-all duration-500 translate-x-1/2 ${
								!changed ? "translate-x-[1500px]" : ""
							}`}
						>
							<h1 className="text-[#346c1e] text-3xl lg:text-4xl font-semibold">
								Мы помогли
							</h1>
							<h3 className="text-lg lg:text-xl font-medium text-black">
								более чем 100 сборами
							</h3>
							<h4 className="text-[15px] font-medium text-black mt-[7px]">
								за 2023 и 2024 года{" "}
							</h4>
						</div>
						<button className="w-full h-10 font-bold text-xs text-white bg-[#346c1e] rounded-[5px]">
							пожертвовать
						</button>
					</div>
					<button onClick={() => setChanged(true)}>
						<ArrowIcon />
					</button>
				</div>
			</div>
		</section>
	);
};
