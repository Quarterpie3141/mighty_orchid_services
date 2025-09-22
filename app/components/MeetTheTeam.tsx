// components/MeetTheTeam.tsx
import Image from "next/image";

export default function MeetTheTeam() {
	return (
		<section
			id="team"
			className="relative py-20 bg-white"
			style={{
				backgroundImage: 'url("/svg/pattern-white.svg")',
				backgroundPosition: "center",
			}}
		>
			<div className="container mx-auto px-4">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Text block */}
					<div className="text-center lg:text-left">
						<span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-orange font-medium uppercase rounded-full shadow-sm">
							Team
						</span>
						<h2 className="text-3xl md:text-4xl font-bold text-coolGray-900 mb-4">
							Meet Our Team
						</h2>
						<p className="text-lg md:text-xl text-coolGray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
							Behind every service we deliver is a team of passionate, skilled
							people who believe in our vision Get to know the individuals
							driving our mission forward.
						</p>

						<div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
							<a
								href="/team"
								className="inline-block py-4 px-8 text-base font-medium text-white bg-mto-blue hover:bg-mto-orange rounded-lg shadow-md transition-colors"
							>
								View Profiles
							</a>
							<a
								href="/careers"
								className="inline-block py-4 px-8 text-base font-medium text-mto-blue border border-mto-blue hover:bg-mto-orange hover:text-white rounded-lg transition-colors"
							>
								Work With Us
							</a>
						</div>
					</div>

					{/* Image block */}
					<div className="relative">
						<Image
							src="/stock/pexels-vlada-karpovich-7433822.jpg"
							alt="Our team"
							width={600}
							height={400}
							className="rounded-xl shadow-lg object-cover"
						/>
						{/* Decorative accent */}
						<img
							src="/svg/dots3-blue.svg"
							alt=""
							className="absolute -bottom-6 -right-6 w-24 opacity-50"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
