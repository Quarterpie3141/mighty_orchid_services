// app/layout.tsx (Next.js App Router)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://mtos.com.au"),
	applicationName: "Mighty Orchid Support (MTOS)",
	title: {
		default: "MTOS | Mighty Orchid Disability Support Services",
		template: "%s | MTOS",
	},
	description:
		"Registered NDIS disability support provider in Karratha and the Pilbara. We offer SIL, respite, community access, daily living supports, high-intensity care, and employment assistance. People Looking After People.",
	keywords: [
		"NDIS",
		"NDIS provider",
		"NDIS Karratha",
		"NDIS Perth",
		"NDIS Hedland",
		"NDIS Pilbara",
		"NDIS Housing",
		"NDIS Support",
		"NDIS Cleaning",
		"NDIS Gardening",
		"NDIS Transport",
		"NDIS Assistance",
		"NDIS Port Hedland",
		"Disability support",
		"Disability services",
		"Disability care worker",
		"Care worker",
		"Supported Independent Living",
		"Support Worker",
		"SIL",
		"Personal care",
		"Medication Assistance",
		"Medication Management",
		"Age care",
		"Aged care worker",
		"respite",
		"support coordination",
		"community access",
		"high intensity support",
		"daily living support",
		"employment support",
		"Mighty Orchid Support",
		"MTOS",
	],
	category: "Disability support services",
	alternates: {
		canonical: "/",
		languages: { "en-AU": "/" },
	},
	openGraph: {
		type: "website",
		url: "https://mtos.com.au/",
		siteName: "Mighty Orchid Support (MTOS)",
		title: "MTOS | Mighty Orchid Disability Support Services",
		description:
			"Registered NDIS provider serving Karratha, Port Hedland, and the Pilbara.",
		locale: "en_AU",
		images: [
			{
				url: "/branding/logo-horizontal.png",
				width: 1200,
				height: 630,
				alt: "MTOS — People Looking After People",
			},
		],
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-video-preview": -1,
			"max-snippet": -1,
		},
	},
	viewport: {
		width: "device-width",
		initialScale: 1,
		viewportFit: "cover",
	},
	authors: [{ name: "Mighty Orchid Support" }],
	creator: "Mighty Orchid Support",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// Business details used in JSON-LD below — keep in sync with reality.
	const business = {
		name: "Mighty Orchid Services (MTOS)",
		url: "https://mtos.com.au/",
		logo: "https://mtos.com.au/branding/logo-horizontal.png", // TODO
		phone: "+61 8 5106 7301", // TODO
		email: "info@mtos.com.au", // TODO
		sameAs: [
			"https://www.facebook.com/people/Mighty-Orchid-Disability-Services/61557284220147/", // TODO or remove
			"https://au.linkedin.com/company/mighty-orchid-services-pty-ltd", // TODO or remove
		],
		address: {
			streetAddress: "51, 5-15 Sharpe Avenue",
			addressLocality: "Karratha",
			addressRegion: "WA",
			postalCode: "6714",
			addressCountry: "AU",
		},
		areaServed: [
			"Karratha",
			"Port Hedland",
			"South Hedland",
			"Hedland",
			"Perth",
			"Pilbara",
			"Roebourne",
			"Dampier",
			"Wickham",
		],
		services: [
			"NDIS Support Coordination (Level 1 & 2)",
			"Supported Independent Living (SIL)",
			"Respite / Short Term Accommodation",
			"Community Access & Participation",
			"Daily Living Assistance",
			"High-Intensity Supports",
			"Employment Preparation & Supports",
		],
	};

	const orgJsonLd = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: business.name,
		url: business.url,
		logo: business.logo,
		email: business.email,
		telephone: business.phone,
		sameAs: business.sameAs,
	};

	const localBusinessJsonLd = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: business.name,
		url: business.url,
		image: business.logo,
		telephone: business.phone,
		email: business.email,
		address: {
			"@type": "PostalAddress",
			...business.address,
		},
		areaServed: business.areaServed,
		priceRange: "$$",
		openingHoursSpecification: [
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
				opens: "09:00",
				closes: "17:00",
			},
		],
	};

	const serviceJsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: "NDIS Disability Support Services",
		provider: {
			"@type": "Organization",
			name: business.name,
			url: business.url,
		},
		areaServed: business.areaServed,
		serviceType: business.services,
		audience: { "@type": "PeopleAudience", audienceType: "NDIS participants" },
		termsOfService: `${business.url}terms`, // optional
	};

	const breadcrumbJsonLd = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: "https://mtos.com.au/",
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Services",
				item: "https://mtos.com.au/#services",
			},
			{
				"@type": "ListItem",
				position: 3,
				name: "Referrals",
				item: "https://mtos.com.au/referrals",
			},
		],
	};

	return (
		<html lang="en-AU" className={inter.variable}>
			<body className={`${inter.className} antialiased`}>
				{children}

				{/* JSON-LD: Organization */}
				<Script
					id="ld-org"
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
				/>
				{/* JSON-LD: LocalBusiness */}
				<Script
					id="ld-local-business"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(localBusinessJsonLd),
					}}
				/>
				{/* JSON-LD: Service */}
				<Script
					id="ld-service"
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
				/>
				{/* JSON-LD: Breadcrumbs */}
				<Script
					id="ld-breadcrumbs"
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
				/>
			</body>
		</html>
	);
}
