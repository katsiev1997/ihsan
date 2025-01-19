import React from "react";

const data = [
	{
		id: 1,
		url: "/news-1.png",
		title: "100 ЗАКРЫТЫХ СБОРОВ",
		description:
			'Мы выражаем благодарность всем неравнодушным людям, благодаря которым, проект "Безликие" успешно завершил 100 сборов! ',
	},
	{
		id: 2,
		url: "/news-2.png",
		title: "БОЛЕЕ 100 СЕРИЙ МУЛЬТФИЛЬМОВ",
		description:
			'Благодаря усилиям команды и вашей поддержке, проект "Безликие" перевел и озвучил более 100 серий мультфильмов на ингушский язык! ',
	},
	{
		id: 3,
		url: "/news-3.png",
		title: "БОЛЕЕ 100 ФАЗАНОВ",
		description:
			"Одним из наших достижений является выпуск более 200 фазанов в природу Республики Ингушетия.",
	},
];

export const SectionFive = () => {
	return (
		<section id="news" className="w-full flex flex-col items-center gap-5">
			<h2 className="text-[50px] text-[#2b5b18] font-semibold">НОВОСТИ</h2>
			<div className="w-full overflow-x-auto flex items-center gap-5 snap-x snap-mandatory">
				{data.map((item) => (
					<div
						key={item.id}
						style={{
							backgroundImage: `url(${item.url})`,
							backgroundSize: "cover",
						}}
						className="min-w-[300px] lg:min-w-[800px] h-[225px] lg:h-[600px] relative rounded-[24px] snap-center"
					>
						<div className="absolute bottom-3 left-3 lg:bottom-7 lg:left-7">
							<h4 className="text-2xl lg:text-4xl text-white font-bold">
								{item.title}
							</h4>
							<p className="text-lg lg:text-[23px] leading-none text-white font-medium">
								{item.description}
							</p>
						</div>
					</div>
				))}
			</div>
			<a href="https://bezlikie.com/">
				<div className="flex justify-center items-center px-5 lg:w-[545px] h-[75px] bg-[#2B5B18] rounded-2xl">
					<p className="text-xl lg:text-[26px] font-bold uppercase text-white">
						посмотреть все новости
					</p>
				</div>
			</a>
		</section>
	);
};
