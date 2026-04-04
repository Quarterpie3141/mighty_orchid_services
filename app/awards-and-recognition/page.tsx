import { Footer, Header } from "../components";

export const metadata = {
	title: "Awards and Recognition | Mighty Orchid Services",
	description: "A gallery of Mighty Orchid Services awards and recognitions.",
};

type Award = {
	imageSrc: string;
	title: string;
	description: string;
};

const awards: Award[] = [
	{
		imageSrc: "/other-assets/awards/business_excellence.jpg",
		title: "KDCCI Best Community Organisation Nominee",
		description:
			"We were proud to be nominated for the Community Impact Award at the KDCCI Business Excellence Awards, recognising the work we do to strengthen connection, care, and inclusion across the Karratha community.",
	},
];

export default function AwardsAndRecognitionPage() {
	const featuredAward = awards[0];

	return (
		<>
			<Header />
			<section
				className="pt-[7rem]"
				style={{
					backgroundImage: 'url("https://i.imgur.com/vs6w1Nn.png")',
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			>
				<div className="container px-4 py-16 mx-auto md:py-24">
					<div className="flex flex-wrap items-center -mx-4 gap-y-12">
						<div className="w-full lg:w-1/2 px-4">
							<span className="inline-flex items-center rounded-full bg-mto-orange px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-sm">
								Awards and Recognition
							</span>
							<h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#000000] md:text-5xl lg:text-6xl">
								Celebrating the milestones that reflect our care.
							</h1>
							<p className="mt-5 max-w-2xl text-lg font-medium text-coolGray-500 md:text-xl">
								This gallery showcases the awards, acknowledgements, and
								community recognition Mighty Orchid Services has received along
								the way.
							</p>
							<div className="mt-8 flex flex-wrap gap-4">
								<a
									className="inline-flex items-center justify-center rounded-lg bg-mto-blue px-6 py-4 text-base font-medium text-white shadow-sm transition duration-200 hover:bg-mto-orange md:text-lg"
									href="#awards-gallery"
								>
									View gallery
								</a>
							</div>
						</div>

						<div className="w-full lg:w-1/2 px-4">
							<div className="relative mx-auto max-w-xl overflow-hidden rounded-[2rem] bg-white/90 p-6 shadow-[0_24px_80px_rgba(24,43,85,0.18)] ring-1 ring-white/70 backdrop-blur-sm">
								<div className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-mto-orange/20 blur-2xl" />
								<div className="absolute -right-8 bottom-10 h-28 w-28 rounded-full bg-mto-blue/10 blur-2xl" />
								<div className="relative rounded-[1.5rem] border border-mto-blue/10 bg-mto-powder p-4 md:p-5">
									{featuredAward ? (
										<div>
											<div className="overflow-hidden rounded-[1.25rem] bg-white shadow-sm ring-1 ring-mto-blue/10">
												<img
													className="h-full w-full object-contain"
													src={featuredAward.imageSrc}
													alt={featuredAward.title}
												/>
											</div>
											<div className="mt-5">
												<div>
													<p className="text-xs font-semibold uppercase tracking-[0.16em] text-coolGray-500">
														Featured recognition
													</p>
													<h2 className="mt-2 text-xl font-bold leading-tight text-mto-blue md:text-2xl">
														{featuredAward.title}
													</h2>
													<p className="mt-3 text-base font-medium text-coolGray-500 md:text-lg">
														{featuredAward.description}
													</p>
												</div>
												<span className="mt-4 inline-flex rounded-full bg-mto-orange px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white ring-1 ring-mto-orange/20">
													Award highlight
												</span>
											</div>
										</div>
									) : (
										<div className="flex min-h-[24rem] flex-col items-center justify-center rounded-[1.25rem] border border-dashed border-mto-blue/20 bg-white px-6 text-center">
											<img
												className="mb-6 h-16 w-auto"
												src="/branding/logo-horizontal.png"
												alt="Mighty Orchid Services"
											/>
											<h2 className="text-2xl font-bold text-mto-blue">
												Ready for your award gallery
											</h2>
											<p className="mt-4 max-w-md text-base font-medium text-coolGray-500">
												Add award images to public/other-assets/awards and then
												add each image, title, and description to the awards
												array.
											</p>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-white py-20" id="awards-gallery">
				<div className="container px-4 mx-auto">
					<div className="mx-auto max-w-3xl text-center">
						<span className="inline-flex items-center rounded-full bg-mto-orange px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-sm">
							Our gallery
						</span>
						<h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-mto-blue md:text-4xl">
							Awards, acknowledgements, and recognitions in pictures
						</h2>
						<p className="mt-4 text-lg font-medium text-coolGray-500 md:text-xl">
							From industry nominations to community recognition, this gallery
							highlights moments that reflect the care, commitment, and impact
							Mighty Orchid Services brings to the people and communities we
							serve.
						</p>
					</div>

					{awards.length > 0 ? (
						<div className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
							{awards.map((award) => (
								<article
									key={award.imageSrc}
									className="group overflow-hidden rounded-[2rem] bg-mto-powder p-4 shadow-sm ring-1 ring-mto-blue/10 transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(24,43,85,0.12)]"
								>
									<div className="overflow-hidden rounded-[1.5rem] bg-white">
										<img
											className="aspect-[4/5] w-full object-contain transition duration-300 group-hover:scale-[1.02]"
											src={award.imageSrc}
											alt={award.title}
										/>
									</div>
									<div className="px-2 pb-2 pt-5">
										<h3 className="text-xl font-bold leading-tight text-mto-blue md:text-2xl">
											{award.title}
										</h3>
										<p className="mt-3 text-base font-medium text-coolGray-500">
											{award.description}
										</p>
									</div>
								</article>
							))}
						</div>
					) : (
						<div className="mt-14 rounded-[2rem] border border-dashed border-mto-blue/20 bg-mto-powder px-6 py-16 text-center">
							<h3 className="text-2xl font-bold leading-tight tracking-tight text-mto-blue md:text-3xl">
								No award images have been added yet
							</h3>
							<p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-coolGray-500 md:text-xl">
								This page is ready. Add award images to
								public/other-assets/awards and create entries in the awards
								array to populate the gallery.
							</p>
						</div>
					)}
				</div>
			</section>
			<Footer />
		</>
	);
}
