"use client";

import { ContactWithUs } from "@/widgets/contact-with-us";
import Image from "next/image";
import React, { useState } from "react";

export const SectionSix = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className="gradient-bottom w-full h-[700px] pt-[320px]">
				<div className="w-full max-w-[1310px] px-5 mx-auto">
					<div className="flex flex-col gap-5">
						<Image src={"/logo-bottom.svg"} alt="logo" width={152} height={56} />
						<ul className="flex items-center gap-4 flex-wrap">
							<li>
								<a href="#fund">
									<div className="px-5 py-6 rounded-full bg-white uppercase flex justify-center items-center font-semibold text-[#51a132]">
										О ФОНДЕ
									</div>
								</a>
							</li>
							<li>
								<a href="#programs">
									<div className="px-5 py-6 rounded-full bg-white uppercase flex justify-center items-center font-semibold text-[#51a132]">
										ПРОГРАММЫ
									</div>
								</a>
							</li>
							<li>
								<a href="#donations">
									<div className="px-5 py-6 rounded-full bg-white uppercase flex justify-center items-center font-semibold text-[#51a132]">
										СБОРЫ
									</div>
								</a>
							</li>
							<li>
								<a href="#news">
									<div className="px-5 py-6 rounded-full bg-white uppercase flex justify-center items-center font-semibold text-[#51a132]">
										НОВОСТИ
									</div>
								</a>
							</li>
						</ul>
						<button
							onClick={() => setOpen(true)}
							className="font-medium text-[#51a132] bg-white rounded-full w-[210px] h-[55px]"
						>
							СВЯЗАТЬСЯ С НАМИ
						</button>
					</div>
				</div>
			</div>
			<ContactWithUs open={open} setOpen={setOpen} />
		</>
	);
};
