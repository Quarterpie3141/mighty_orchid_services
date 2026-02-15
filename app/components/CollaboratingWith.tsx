// components/CollaboratingWith.tsx
import Image from "next/image";

const collaborators = [
	{
		name: "Pilbara Kimberley University Centres",
		logo: "/branding/pkuc-logo-black.png",
		url: "https://www.pkuc.edu.au/",
	},
	{
		name: "Yara",
		logo: "/branding/knowledge_grows_for_a4.png",
		url: "https://www.yara.com.au/about-yara/about-yara-australia/pilbara/ ",
	},
	{
		name: "With Grace Support",
		logo: "/branding/wgs-logo.png",
		url: "https://withgracesupport.com.au/",
	},
];

export default function CollaboratingWith() {
	return (
		<section
			id="collaborators"
			className="relative py-20 bg-white"
			style={{
				backgroundImage: 'url("/svg/pattern-white.svg")',
				backgroundPosition: "center",
			}}
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-blue font-medium uppercase rounded-full shadow-sm">
						Collaborating With
					</span>
					<h2 className="text-3xl md:text-4xl font-bold text-coolGray-900 mb-4">
						Proudly Collaborating With
					</h2>
					<p className="text-lg md:text-xl text-coolGray-600 max-w-2xl mx-auto">
						We work alongside these outstanding organisations to deliver the
						best outcomes for our community.
					</p>
				</div>
				<div className="flex flex-wrap justify-center items-center gap-8">
					{collaborators.map((company) => (
						<a
							key={company.name}
							href={company.url}
							className="flex items-center justify-center bg-white rounded-lg shadow p-4 h-36 w-56 hover:shadow-lg transition"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src={company.logo}
								alt={`${company.name} logo`}
								width={200}
								height={80}
								className="object-contain h-20 w-auto"
							/>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
