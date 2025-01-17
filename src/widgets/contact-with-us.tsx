"use client";

import { useClickOutside } from "@/shared/hooks/use-click-outside";
import Image from "next/image";
import React, { useRef } from "react";

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ContactWithUs = ({ open, setOpen }: Props) => {
    const ref = useRef<HTMLDivElement | null>(null);
    useClickOutside(ref as React.RefObject<HTMLElement>, () => setOpen(false));

    return (
        open && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                <div
                    ref={ref}
                    className="flex items-center justify-center bg-white rounded-[16px] border-[3px] border-[#346C1E] w-[440px] h-[245px] z-20"
                >
                    <div className="flex flex-col gap-3">
                        <h3 className="text-[#346C1E] text-4xl font-semibold">СВЯЗАТЬСЯ С НАМИ</h3>

                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                                <a target="_blank" href="https://wa.me/+79640279097">
                                    <Image
                                        src="/whatsapp.png"
                                        alt="whatsapp"
                                        width={31}
                                        height={31}
                                    />
                                </a>
                                <a target="_blank" href="tel:+79640279097">
                                    <Image src="/phone.png" alt="phone" width={31} height={31} />
                                </a>
                            </div>

                            <p className="text-xl">8(964) 027-90-97</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                                <a target="_blank" href="https://wa.me/+79281113333">
                                    <Image
                                        src="/whatsapp.png"
                                        alt="whatsapp"
                                        width={31}
                                        height={31}
                                    />
                                </a>
                                <a target="_blank" href="tel:+79640279097">
                                    <Image src="/phone.png" alt="phone" width={31} height={31} />
                                </a>
                            </div>

                            <p className="text-xl">8(928) 111-33-33</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};
