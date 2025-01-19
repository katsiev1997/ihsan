import { Card } from "@/shared/ui/card";
import React from "react";

const data = [
    {
        id: 1,
        imageUrl: "/arm-help.png",
        alt: "arm-help",
        title: "“ПРОТЯНИ РУКУ ПОМОЩИ”",
        description: "Мы оказываем адресную помощь малоимущим семьям, детям-сиротам, инвалидам, больным, нуждающимся в лечении, и другим категориям граждан, оказавшимся в трудной жизненной ситуации.",
    },
    {
        id: 2,
        imageUrl: "/save-language.png",
        alt: "save-language",
        title: "СОХРАНЕНИЕ ЯЗЫКА",
        description: "Мы издаем книги и учебные пособия, чтобы сохранить и передать будущим поколениям богатое культурное наследие ингушского народа. Также переводим мультфильмы с разных языков на ингушский.",
    },
    {
        id: 3,
        imageUrl: "/voice-multfilms.png",
        alt: "voice-multfilms",
        title: "ОЗВУЧКА МУЛЬТФИЛЬМОВ",
        description: "Также мы переводим с разных языков (русский, турецкий, арабский) на игнушский популярные мультфильмы, такие как “Кунг-фу Панда”, “Ледниковый период”, “Нусса и Рара” и многие другие.",
    },
    {
        id: 4,
        imageUrl: "/save-nature.png",
        alt: "save-nature",
        title: "СОХРАНЕНИЕ ПРИРОДЫ",
        description: "Средства, полученные от пожертвований, направляются на поддержку различных инициатив, таких как защита лесов, борьба с загрязнением воздуха и воды, сохранение биоразнообразия и другое.",
    },
    {
        id: 5,
        imageUrl: "/save-animals.png",
        alt: "save-animals",
        title: "ЗАБОТА О ЖИВОТНЫХ",
        description: "Полученные средства направляются на кормление и поение животных, на их лечение и обеспечение им необходимых условий для жизни.",
    },
    {
        id: 6,
        imageUrl: "/pay-zakyat.png",
        alt: "pay-zakyat",
        title: "ВЫПЛАТА ЗАКЯТА",
        description: "Благодаря нашему проекту вы можете выплатить закят, а мы, в свою очередь отдаем эти средства в руки наиболее остро-нуждающихся",
    },
];


export const SectionThree = () => {
    return (
        <section id="programs" className="w-full flex flex-col gap-5 items-center">
            <h2 className="text-[50px] text-[#2b5b18] font-semibold">О ФОНДЕ</h2>
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.map(({ id, imageUrl, alt, title, description }) => (
                    <Card key={id} imageUrl={imageUrl} alt={alt} title={title} description={description}/>
                ))}
            </div>
            <div className="w-full overflow-x-auto md:hidden flex items-center gap-5 snap snap-x snap-mandatory">
                {data.map(({ id, imageUrl, alt, title, description }) => (
                    <Card key={id} imageUrl={imageUrl} alt={alt} title={title} description={description}/>
                ))}
            </div>
        </section>
    );
};
