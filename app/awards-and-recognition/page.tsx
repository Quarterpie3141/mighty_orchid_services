import { Footer, Header } from "../components";
import awards from "./awards.json";

export const metadata = {
	title: "Awards and Recognition | Mighty Orchid Services",
	description: "A gallery of Mighty Orchid Services awards and recognitions.",
};

export default function AwardsAndRecognitionPage() {
	const featuredAward = awards[0];

	return (
		<>
			<Header />

			{/* Hero */}
			<section
				className="pt-[7rem]"
				style={{
					backgroundImage: 'url("https://i.imgur.com/vs6w1Nn.png")',
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			>
				<div className="container px-4 py-16 mx-auto md:py-24">
					<div className="grid items-center gap-12 lg:grid-cols-2">
						<div>
							<span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-orange font-medium uppercase rounded-full shadow-sm">
								Awards and Recognition
							</span>
							<h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-coolGray-900 md:text-5xl lg:text-6xl">
								Celebrating the milestones that reflect our care.
							</h1>
							<p className="mt-5 max-w-2xl text-lg font-medium text-coolGray-500 md:text-xl">
								This gallery showcases the awards, acknowledgements, and
								community recognition Mighty Orchid Services has received along
								the way.
							</p>
							<a
								className="mt-8 inline-flex py-4 px-8 text-base font-medium text-white bg-mto-blue hover:bg-mto-orange rounded-lg shadow-md transition-colors"
								href="#awards-gallery"
							>
								View gallery
							</a>
						</div>

						{featuredAward && (
							<div>
								<img
									src={featuredAward.imageSrc}
									alt={featuredAward.title}
									className="w-full max-h-[28rem] object-contain rounded-lg"
								/>
								<h2 className="mt-4 text-xl font-semibold text-coolGray-900">
									{featuredAward.title}
								</h2>
								<p className="mt-2 text-base text-coolGray-500">
									{featuredAward.description}
								</p>
							</div>
						)}
					</div>
				</div>
			</section>

			{/* Gallery */}
			<section className="bg-coolGray-50 py-20" id="awards-gallery">
				<div className="container px-4 mx-auto">
					<div className="mx-auto max-w-3xl text-center mb-12">
						<span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-orange font-medium uppercase rounded-full shadow-sm">
							Our gallery
						</span>
						<h2 className="text-3xl font-bold leading-tight tracking-tight text-coolGray-900 md:text-4xl">
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
						<div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
							{awards.map((award) => (
								<article
									key={award.imageSrc}
									className="bg-white rounded-lg shadow p-4"
								>
									<img
										className="w-full h-56 object-contain"
										src={award.imageSrc}
										alt={award.title}
									/>
									<h3 className="mt-4 text-xl font-semibold text-coolGray-900">
										{award.title}
									</h3>
									<p className="mt-2 text-base text-coolGray-500">
										{award.description}
									</p>
								</article>
							))}
						</div>
					) : (
						<p className="text-center text-coolGray-500 text-lg">
							No awards have been added yet.
						</p>
					)}
				</div>
			</section>
			<Footer />
		</>
	);
}
