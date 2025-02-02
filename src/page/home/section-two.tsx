import { Accordion } from "@/shared/ui/accordion";
import Image from "next/image";
import React from "react";

const socials = [
	{
		id: 1,
		icons: [
			{
				id: 1,
				iconAlt: "whatsapp",
				iconUrl: "/whatsapp.png",
				href: "https://wa.me/+79640279097",
			},
		],
		title: "8(964) 027-90-97",
	},
	{
		id: 2,
		icons: [
			{
				id: 1,
				iconAlt: "whatsapp",
				iconUrl: "/whatsapp.png",
				href: "https://wa.me/+79281113333",
			},
		],
		title: "8(928) 111-33-33",
	},
	{
		id: 3,
		icons: [
			{
				id: 1,
				iconAlt: "instagram",
				iconUrl: "/instagram.png",
				href: "https://instagram.com/fondihsan",
			},
		],
		title: "fondihsan",
	},
	// <div className="flex items-center gap-4">
	// 					<div className="flex items-center gap-1">
	// 						<a target="_blank" href="https://wa.me/+79281113333">
	// 							<Image
	// 								src="/instagram.png"
	// 								alt="instagram"
	// 								width={31}
	// 								height={31}
	// 							/>
	// 						</a>
	// 					</div>
	// 					<p className="text-xl">bezlikie.official</p>
	// 				</div>
	{
		id: 4,
		icons: [
			{
				id: 1,
				iconAlt: "instagram",
				iconUrl: "/instagram.png",
				href: "https://instagram.com/bezlikie.official",
			},
		],
		title: "bezlikie.official",
	},
	{
		id: 5,
		icons: [
			{
				id: 1,
				iconAlt: "vk",
				iconUrl: "/vk.png",
				href: "https://vk.com/fondihsan",
			},
		],
		title: "fondihsan",
	},
	{
		id: 6,
		icons: [
			{
				id: 1,
				iconAlt: "telegram",
				iconUrl: "/telegram.png",
				href: "https://t.me/bezlikie_official",
			},
		],
		title: "bezlikie_official",
	},
];

const contacts = [
	{
		id: 1,
		icons: [
			{
				id: 1,
				iconAlt: "telegram",
				iconUrl: "/telegram.png",
				href: "https://t.me/multiki_falg",
			},
			{
				id: 2,
				iconAlt: "instagram",
				iconUrl: "/instagram.png",
				href: "https://instagram.com/multiki_falg",
			},
		],
		title: "multiki_falg",
	},
	{
		id: 2,
		icons: [
			{
				id: 1,
				iconAlt: "telegram",
				iconUrl: "/telegram.png",
				href: "https://t.me/dai_mott",
			},
			{
				id: 2,
				iconAlt: "instagram",
				iconUrl: "/instagram.png",
				href: "https://instagram.com/dai_mott",
			},
		],
		title: "dai_mott",
	},
];

const data = [
	{
		title: "История фонда",
		content: (
			<div className="w-full flex flex-col gap-6">
				<p>
					В 2011 году, в одном из пожаров жилого дома, где проживала малообеспеченная
					многодетная семья, погибло трое детей. Их постигло не только страшное горе, они
					остались без жилья, а в семье были ещё дети. Это потрясло Алихана Хамхоева
					и многих наших соотечественников, которые объявили сбор помощи. Здесь Алихан
					Хамхоев познакомился с таким же, как и он, одержимым в плане благотворительной
					деятельности замечательным человеком — Хамзатом Оскановым. С тех пор оказывать
					помощь нуждающимся стало смыслом их жизни. В 2011 году они открыли
					благотворительный фонд «Ихсан» («Искренность»), который с марта 2016 года
					официально был зарегистрирован как благотворительный фонд Республики Ингушетия.
					Деятельностью фонда могла быть материальная помощь в виде продуктов питания
					малоимущим, сбор средств на лечение, помощь погорельцам и тому подобное.
					Республика Ингушетия небольшая, здесь все как на ладони, и доверие заслужить
					не составит труда, если человек честен пред Всевышним и перед людьми. Фонд
					«Ихсан» стал популярен, люди ему доверились, фонд стали поддерживать бизнесмены,
					предприниматели и обычные люди.
				</p>
				<p>
					Всё бы хорошо, но в самый разгар своей общественной, социально-значимой
					деятельности с Алиханом Хамхоевым случилось горе. В 2014 году у него внезапно
					началась отслойка сетчатки одного глаза. Он срочно нуждался в медицинской помощи
					за пределами республики. Фонд оказал ему поддержку, он выдержал две операции,
					но, к сожалению, врачи оказались бессильны, процесс был необратим. Его признали
					инвалидом первой группы по зрению. — Но у меня не было времени горевать и жалеть
					себя, — говорит Алихан Хамхоев, — я принял то, что со мной случилось по воле
					Аллаха смиренно, и ни на минуту не задерживаясь, продолжил вести свой образ
					жизни. Это удивительное состояние — желание помочь нуждающимся, и оно вернулось
					ко мне бумерангом, в поддержку. Обязательство, взятое мной, помогало мне жить
					и двигаться вперёд. Как я мог себе позволить отступить, когда я взял на себя
					миссию поддержки нуждающихся.
				</p>
			</div>
		),
	},
	{
		title: "НАПРАВЛЕНИЯ ДЕЯТЕЛЬНОСТИ ФОНДА",
		content: (
			<div className="w-full flex justify-start">
				<ol className="list-decimal list-inside">
					<li>Привлечение пожертвований и грантов для реализации программ фонда.</li>
					<li>
						Оказание помощи детям и гражданам в тяжелом материальном положении, включая
						лечение и реабилитацию.
					</li>
					<li>
						Поддержка детей-сирот, в том числе детей погибших при исполнении служебного
						долга.
					</li>
					<li>
						Материальная помощь детским учреждениям, интернатам, приютам, больницам и
						реабилитационным центрам.
					</li>
					<li>Борьба с бедностью и безграмотностью в России.</li>
					<li>
						Поддержка проектов по сохранению умирающих языков и культурного наследия
						малых народов.
					</li>
					<li>
						Содействие сохранению и реставрации памятников исторического и культурного
						наследия, включая объекты Ингушетии.
					</li>
					<li>Популяризация культурного наследия Республики Ингушетия.</li>
					<li>
						Восстановление башенных сооружений и благоустройство прилегающих территорий.
					</li>
					<li>Содействие гуманному отношению к животным и помощь бездомным животным.</li>
					<li>Организация озеленения и охраны природных территорий.</li>
					<li>
						Развитие научного, культурного, интеллектуального и туристического
						потенциала региона.
					</li>
				</ol>
			</div>
		),
	},
	{
		title: "УЧРЕДИТЕЛЬНЫЕ ДОКУМЕНТЫ",
		content: (
			<div className="w-full flex justify-start">
				<ol className="list-decimal list-inside">
					<li>Устав.</li>
					<li>Свидетельство</li>
				</ol>
			</div>
		),
	},
	{
		title: "ПОПЕЧИТЕЛЬСКИЙ СОВЕТ",
		content: <div className="w-full flex justify-start"></div>,
	},
	{
		title: "КОМАНДА ФОНДА",
		content: (
			<div className="w-full flex flex-col gap-2 text-[23px]">
				<div className="flex items-center gap-1">
					<Image src="/user.png" alt="user" width={42} height={37} />
					<p>Хамхоев Алихан</p>
				</div>
				<div className="flex items-center gap-1">
					<Image src="/user.png" alt="user" width={42} height={37} />
					<p>Мержоев Хасан</p>
				</div>
				<div className="flex items-center gap-1">
					<Image src="/user.png" alt="user" width={42} height={37} />
					<p>Гайсанов Микаил</p>
				</div>
				<div className="flex items-center gap-1">
					<Image src="/user.png" alt="user" width={42} height={37} />
					<p>Экажев Тамерлан</p>
				</div>
			</div>
		),
	},
	{
		title: "НАШИ ПАРТНЕРЫ",
		content: (
			<div className="w-full flex justify-start gap-11 py-11 px-5">
				<Image src="/tesham.png" alt="tesham" width={138} height={130} />
				<Image src="/kdl.png" alt="kdl" width={175} height={147} />
			</div>
		),
	},
	{
		title: "СПОНСОРЫ",
		content: (
			<div className="w-full flex justify-start">
				<p>
					Мы набираем спонсоров для поддержки нашего проекта “Безликие”. Ежемесячно наши
					спонсоры вносят денежные средства в размере 500, 1000, 2000 и более рублей на
					счет, которые позже направляются на программу “Сохранение ингушского языка”.
					Чтобы стать нашим спонсором напишите на номер 89281113333 слово “Спонсор” и
					выберите сумму.
				</p>
			</div>
		),
	},
	{
		title: "ОТЧЕТЫ",
		content: <div className="w-full flex justify-start"></div>,
	},
	{
		title: "НАШИ СОЦ. СЕТИ",
		content: (
			<div className="w-full flex justify gap-5 mt-4">
				<div className="w-full flex flex-col gap-2 text-[23px]">
					{socials.map((item) => (
						<div key={item.id} className="flex items-center gap-4">
							<div className="flex items-center gap-1">
								{item.icons.map((icon) => (
									<a key={icon.id} target="_blank" href={icon.href}>
										<Image
											src={icon.iconUrl}
											alt={icon.iconAlt}
											width={31}
											height={31}
										/>
									</a>
								))}
							</div>
							<p className="text-xl">{item.title}</p>
						</div>
					))}
				</div>
				<div className="w-full flex flex-col gap-2 text-[23px]">
					{contacts.map((item) => (
						<div key={item.id} className="flex items-center gap-4">
							<div className="flex items-center gap-1">
								{item.icons.map((icon) => (
									<a key={icon.id} target="_blank" href={icon.href}>
										<Image
											src={icon.iconUrl}
											alt={icon.iconAlt}
											width={31}
											height={31}
										/>
									</a>
								))}
							</div>
							<p className="text-xl">{item.title}</p>
						</div>
					))}
				</div>
			</div>
		),
	},
];

export const SectionTwo = () => {
	return (
		<section id="fund" className="w-full flex flex-col gap-5 items-center">
			<h2 className="text-[50px] text-[#2b5b18] font-semibold">О ФОНДЕ</h2>
			{data.map((item, i) => (
				<Accordion key={i} title={item.title}>
					{item.content}
				</Accordion>
			))}
		</section>
	);
};
