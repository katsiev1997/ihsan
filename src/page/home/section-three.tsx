import { Card } from "@/shared/ui/card";
import React from "react";

export const SectionThree = () => {
    return (
        <section id="programs" className="w-full flex flex-col gap-5 items-center">
            <h2 className="text-[50px] text-[#2b5b18] font-semibold">О ФОНДЕ</h2>
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <Card imageUrl="/arm-help.png" alt="arm-help" title="“ПРОТЯНИ РУКУ ПОМОЩИ”" />
                <Card imageUrl="/save-language.png" alt="save-language" title="СОХРАНЕНИЕ ЯЗЫКА" />
                <Card
                    imageUrl="/voice-multfilms.png"
                    alt="voice-multfilms"
                    title="ОЗВУЧКА МУЛЬТФИЛЬМОВ"
                />
                <Card imageUrl="/save-nature.png" alt="save-nature" title="СОХРАНЕНИЕ ПРИРОДЫ" />
                <Card imageUrl="/save-animals.png" alt="save-animals" title="ЗАБОТА О ЖИВОТНЫХ" />
                <Card imageUrl="/pay-zakyat.png" alt="pay-zakyat" title="ВЫПЛАТА ЗАКЯТА" />
            </div>
            <div className="w-full overflow-x-auto md:hidden flex items-center gap-5 snap snap-x snap-mandatory">
                <Card imageUrl="/arm-help.png" alt="arm-help" title="“ПРОТЯНИ РУКУ ПОМОЩИ”" />
                <Card imageUrl="/save-language.png" alt="save-language" title="СОХРАНЕНИЕ ЯЗЫКА" />
                <Card
                    imageUrl="/voice-multfilms.png"
                    alt="voice-multfilms"
                    title="ОЗВУЧКА МУЛЬТФИЛЬМОВ"
                />
                <Card imageUrl="/save-nature.png" alt="save-nature" title="СОХРАНЕНИЕ ПРИРОДЫ" />
                <Card imageUrl="/save-animals.png" alt="save-animals" title="ЗАБОТА О ЖИВОТНЫХ" />
                <Card imageUrl="/pay-zakyat.png" alt="pay-zakyat" title="ВЫПЛАТА ЗАКЯТА" />
            </div>
        </section>
    );
};
