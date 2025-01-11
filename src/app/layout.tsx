import type { Metadata } from "next";
import { Inter, Jost, Montserrat } from "next/font/google";
import "./globals.css";

const jost = Jost({
    variable: "--font-jost",
    subsets: ["cyrillic"],
    display: "swap",
});
const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["cyrillic"],
    display: "swap",
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["cyrillic"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={`${jost.variable} ${montserrat.variable} ${inter.variable} antialiased `}>{children}</body>
        </html>
    );
}
