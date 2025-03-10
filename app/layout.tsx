import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "MTOS | Mighty Orchid Disability Support Services",
	description:
		'Empowering individuals with disabilities through registered NDIS support, we provide SIL, respite, community access, daily life support, high-intensity care, and employment aids. Serving Karratha, we’re committed to helping clients build independence and connect with their community. Contact us to learn how we can support you or your loved ones. "People Looking After People."',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
