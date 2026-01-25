import Link from "next/link";
import { Footer, Header } from "../components";
import { events, type EventItem } from "./eventsData";

export const metadata = {
	title: "Events | Mighty Orchid Services",
	description:
		"Upcoming and past events from Mighty Orchid Services — community days, employment forums, workshops and more in the Pilbara.",
};

export default function EventsPage() {
	const eventsByYear = events.reduce(
		(acc, event) => {
			const year = new Date(event.date).getFullYear();
			if (!acc[year]) acc[year] = [];
			acc[year].push(event);
			return acc;
		},
		{} as Record<number, typeof events>,
	);

	const sortedYears = Object.keys(eventsByYear).sort(
		(a, b) => Number(b) - Number(a),
	);

	return (
		<>
			<Header />
			<main className="pt-36 pb-24 bg-white">
				<section className="container mx-auto px-4 max-w-6xl">
					<h1 className="text-4xl font-bold text-mto-blue mb-6">Events</h1>
					<p className="text-lg text-coolGray-600 mb-8">
						See upcoming and recent events hosted or supported by Mighty Orchid
						Services. Click any event for details and how to get involved.
					</p>

					{sortedYears.map((year, yearIndex) => (
						<div key={year}>
							{yearIndex > 0 && <hr className="my-12 border-gray-300" />}
							<h2 className="text-2xl font-semibold text-mto-blue mb-6">
								{year}
							</h2>
							<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-12">
								{eventsByYear[Number(year)].map((ev: EventItem) => (
									<article
										key={ev.slug}
										className="rounded-lg border overflow-hidden shadow-sm"
									>
										<Link href={`/events/${ev.slug}`} className="block">
											<img
												src={ev.image}
												alt={ev.title}
												className="w-full h-44 object-cover"
												loading="lazy"
											/>
											<div className="p-4">
												<h3 className="text-xl font-semibold text-mto-blue mb-2">
													{ev.title}
												</h3>
												<p className="text-sm text-coolGray-500 mb-3">
													<strong className="text-coolGray-700">
														{ev.date}
													</strong>
													{ev.time ? ` • ${ev.time}` : ""}
												</p>
												<p className="text-coolGray-600 text-sm">
													{ev.excerpt}
												</p>
											</div>
										</Link>
										<div className="p-3 border-t bg-gray-50 text-right">
											<Link
												href={`/events/${ev.slug}`}
												className="text-mto-orange font-medium underline"
											>
												View details
											</Link>
										</div>
									</article>
								))}
							</div>
						</div>
					))}
				</section>
			</main>
			<Footer />
		</>
	);
}
