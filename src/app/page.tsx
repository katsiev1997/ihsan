import { SectionOne } from "@/page/home/section-one";
import { SectionTwo } from "@/page/home/section-two";
import { SectionThree } from "@/page/home/section-three";
import { Header } from "@/widgets/header";
import { SectionFour } from "@/page/home/section-four";

export default function Home() {
    return (
        <div>
            <div className="gradient-top">
                <Header />
                <SectionOne />
            </div>
            <div className="w-full max-w-[1300px] px-5 mx-auto flex flex-col gap-20">
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <div></div>
            </div>
        </div>
    );
}
