import Image from "next/image";
import React from "react";

const data = [
    {
        id: 1,
        title: "Поможем Абдуллаху встать на ноги",
        fund: "1 223 000₽",
        url: "/fundraising-1.png",
    },
    {
        id: 2,
        title: "Салахуддину требуется реабилитация",
        fund: "613 000₽",
        url: "/fundraising-2.png",
    },
    {
        id: 3,
        title: "Поможем Алихану преодолеть аутизм",
        fund: "2 780 000₽",
        url: "/fundraising-3.png",
    },
    {
        id: 4,
        title: "Помощь Руслану:  восстановление и реабилитация",
        fund: "445 000₽",
        url: "/fundraising-4.png",
    },
    {
        id: 5,
        title: "Помощь Адаму Коригову",
        fund: "4 400 000₽",
        url: "/fundraising-5.png",
    },
    {
        id: 6,
        title: "Помощь Абдул-Малику Цороеву: необходима операция",
        fund: "1 223 000₽",
        url: "/fundraising-6.png",
    },
    {
        id: 7,
        title: "ПоможемХасану жить без боли",
        fund: "1 400 000₽",
        url: "/fundraising-7.png",
    },
    {
        id: 8,
        title: "Поможем семье Гардалоевых восстановить дом после трагедии",
        fund: "1 100 000₽",
        url: "/fundraising-8.png",
    },
    {
        id: 9,
        title: "Срочная операция для Адама Нальгиева",
        fund: "170 000₽",
        url: "/fundraising-9.png",
    },
    {
        id: 10,
        title: "Сбор средств на реабилитацию мальчика с аутизмом",
        fund: "335 000₽",
        url: "/fundraising-10.png",
    },
    {
        id: 11,
        title: "Сбор средств на спасение руки после тяжелой травмы",
        fund: "150 000₽",
        url: "/fundraising-11.png",
    },
];

export const SectionFour = () => {
    return (
        <section id="donations" className="w-full flex flex-col items-center gap-5">
            <h2 className="text-[50px] text-[#2b5b18] font-semibold">СБОРЫ</h2>
            <div className="w-full flex flex-col items-center gap-5 pb-5">
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
                                <h4 className="text-4xl lg:text-[75px] text-white font-bold">
                                    {item.fund}
                                </h4>
                                <p className="text-lg lg:text-[23px] text-white font-medium">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <a href="#">
                    <div className="flex justify-center items-center w-[300px] lg:w-[545px] h-[75px] bg-[#2B5B18] rounded-2xl">
                        <p className="text-xl lg:text-[26px] font-bold uppercase text-white">
                            посмотреть все сборы
                        </p>
                    </div>
                </a>
            </div>
            <Image
                src={"/fundraising-steps.png"}
                alt="fundraising-steps"
                width={1581}
                height={508}
            />
            <div className="w-full flex flex-col pl-10 lg:pl-56 gap-5">
                <h4 className="text-[32px] text-[#346c1e] font-semibold">Перечень документов</h4>
                <ul className="flex flex-col gap-[10px] list-disc pl-5">
                    <li className="pl-5 text-2xl">Копия паспорта</li>
                    <li className="pl-5 text-2xl">Копия снилса</li>
                    <li className="pl-5 text-2xl">ИНН</li>
                    <li className="pl-5 text-2xl">Справка о доходах</li>
                    <li className="pl-5 text-2xl">Медицинский документы за последний год</li>
                    <li className="pl-5 text-2xl">
                        Фотография в электронном формате в хорошем качестве
                    </li>
                </ul>
                <div className="w-full flex flex-col gap-1">
                    <h4 className="text-[32px] text-[#346c1e] font-semibold">
                        После закрытия сбора
                    </h4>
                    <p className="text-2xl">
                        мы снимаем видеоотчет, где нуждающийся благодарит жертвователей
                    </p>
                </div>
            </div>
        </section>
    );
};
