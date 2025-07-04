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
	title: "Благотворительный фонд Республики Ингушетия 'ИХСАН' (Искренность)",
	description:
		"Благотворительный фонд Республики Ингушетия 'ИХСАН' (Искренность). Национальный проект 'БЕЗЛИКИЕ'. Программы, сборы, новости и помощь нуждающимся.",
	keywords:
		"благотворительность, фонд, Ингушетия, ИХСАН, Искренность, БЕЗЛИКИЕ, помощь, программы, сборы",
	authors: [{ name: "Благотворительный фонд 'ИХСАН'" }],
	creator: "Благотворительный фонд Республики Ингушетия 'ИХСАН'",
	publisher: "Благотворительный фонд Республики Ингушетия 'ИХСАН'",
	robots: "index, follow",
	openGraph: {
		title: "Благотворительный фонд Республики Ингушетия 'ИХСАН' (Искренность)",
		description:
			"Благотворительный фонд Республики Ингушетия 'ИХСАН' (Искренность). Национальный проект 'БЕЗЛИКИЕ'.",
		type: "website",
		locale: "ru_RU",
	},
	twitter: {
		card: "summary_large_image",
		title: "Благотворительный фонд Республики Ингушетия 'ИХСАН'",
		description:
			"Благотворительный фонд Республики Ингушетия 'ИХСАН' (Искренность). Национальный проект 'БЕЗЛИКИЕ'.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body
				className={`${jost.variable} ${montserrat.variable} ${inter.variable} antialiased `}
			>
				{children}
			</body>
		</html>
	);
}
