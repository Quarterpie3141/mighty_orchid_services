import { ContactForm, Footer, Header } from "../../components";
import events from "../eventsData";

interface Props {
	params: { slug: string };
}

export default async function EventDetail({ params }: Props) {
	const { slug } = await params;
	const ev = events.find((e) => e.slug === slug);

	if (!ev) {
		return (
			<>
				<Header />
				<main className="pt-24 pb-24 container mx-auto px-4 max-w-4xl">
					<h1 className="text-3xl font-bold mb-4">Event not found</h1>
					<p className="text-coolGray-600">
						We couldn't locate that event. Please return to the{" "}
						<a href="/events" className="text-mto-orange underline">
							events listing
						</a>
						.
					</p>
				</main>
				<Footer />
			</>
		);
	}

	return (
		<>
			<Header />

			{/* Hero image — full-width cover */}
			{ev.image && (
				<div className="w-full mb-6">
					<img
						src={ev.image}
						alt={ev.title}
						className="w-full h-64 md:h-80 object-cover"
						loading="lazy"
					/>
				</div>
			)}

			<main className="pt-6 pb-24 container mx-auto px-4 max-w-5xl">
				<nav aria-label="Breadcrumb" className="text-sm mb-4 text-coolGray-500">
					<ol className="flex gap-2">
						<li>
							<a className="hover:underline" href="/">
								Home
							</a>{" "}
							/
						</li>
						<li>
							<a className="hover:underline" href="/events">
								Events
							</a>{" "}
							/
						</li>
						<li aria-current="page" className="text-coolGray-700 font-medium">
							{ev.title}
						</li>
					</ol>
				</nav>

				<article>
					<h1 className="text-4xl font-bold text-mto-blue mb-3">{ev.title}</h1>
					<p className="text-sm text-coolGray-500 mb-6">
						<strong>{ev.date}</strong>
						{ev.time ? ` • ${ev.time}` : ""}
						{ev.location ? ` • ${ev.location}` : ""}
					</p>

					{/* image is rendered full-width above to avoid cropping */}

					{ev.content && (
						<div className="prose prose-lg max-w-none text-coolGray-700 mb-8">
							{ev.content.split("\n\n").map((para, i) => (
								<p key={para}>{para}</p>
							))}
						</div>
					)}

					{/* Flexible content blocks (paragraphs & images) */}
					{ev.contentBlocks && ev.contentBlocks.length > 0 && (
						<section className="mt-6 mb-8">
							<div className="prose prose-lg max-w-none text-coolGray-700">
								{ev.contentBlocks.map((block, i) => {
									if (block.type === "paragraph") {
										return <p key={block.text}>{block.text}</p>;
									}

									if (block.type === "image") {
										const img = block;
										if (img.fullWidth) {
											return (
												<div key={block.src} className="w-full my-6">
													<img
														src={img.src}
														alt={img.alt ?? ev.title}
														className="w-full h-auto object-cover rounded"
													/>
													{img.caption && (
														<div className="text-sm text-coolGray-500 mt-2">
															{img.caption}
														</div>
													)}
												</div>
											);
										}

										return (
											<div
												key={img.src}
												className="w-full md:w-3/4 mx-auto my-6"
											>
												<img
													src={img.src}
													alt={img.alt ?? ev.title}
													className="w-full h-auto object-contain rounded"
												/>
												{img.caption && (
													<div className="text-sm text-coolGray-500 mt-2">
														{img.caption}
													</div>
												)}
											</div>
										);
									}

									return null;
								})}
							</div>
						</section>
					)}

					{/* Registration CTA */}
					<section className="mt-8 p-6 bg-mto-blue/5 rounded-lg">
						<h2 className="text-2xl font-semibold text-mto-blue mb-3">
							Get Involved
						</h2>
						<p className="text-coolGray-700 mb-4">
							{ev.excerpt ?? "Contact us for more information."}
						</p>
						{ev.registrationLink ? (
							<a
								href={ev.registrationLink}
								className="inline-block px-6 py-3 bg-mto-orange text-white rounded-md font-medium"
							>
								Register / RSVP
							</a>
						) : (
							<a
								href="/#contact"
								className="inline-block px-6 py-3 bg-mto-orange text-white rounded-md font-medium"
							>
								Contact Us
							</a>
						)}
					</section>
				</article>
			</main>
			<Footer />
		</>
	);
}
