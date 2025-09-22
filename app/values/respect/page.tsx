import { Footer, Header } from "../../components";

export default function Home() {
	return (
		<>
			<Header />

			{/* RESPECT — cohesive narrative section */}
			<section
				id="Respect"
				className="relative py-48 bg-white"
				style={{
					backgroundImage: 'url("/svg/pattern-white.svg")',
					backgroundPosition: "center",
				}}
			>
				<div className="container mx-auto px-4">
					{/* Eyebrow + Title + Lead */}
					<div className="max-w-3xl mx-auto text-center">
						<span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-orange font-medium uppercase rounded-full">
							Respect
						</span>
						<h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-coolGray-900">
							Respect at Mighty Orchid Services
						</h1>
						<p className="mt-4 text-lg md:text-xl text-coolGray-600">
							Respect means recognising each person’s rights, voice, culture,
							and choices. We listen first, communicate clearly, and uphold
							dignity in every interaction—so supports feel safe, collaborative,
							and genuinely yours.
						</p>
					</div>

					{/* Divider */}
					<div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-coolGray-200 to-transparent" />

					{/* Main grid: left narrative + right timeline */}
					<div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
						{/* Left: sticky narrative */}
						<aside className="lg:col-span-5">
							<div className="lg:sticky lg:top-24">
								<h2 className="text-2xl md:text-3xl font-semibold text-coolGray-900">
									What “Respect” means to us
								</h2>
								<p className="mt-4 text-coolGray-700 leading-relaxed">
									We honour your preferences, privacy, and independence. Your
									identity, culture, language, and goals shape the way we plan
									and deliver supports—always with consent and transparency.
								</p>
								<p className="mt-4 text-coolGray-700 leading-relaxed">
									Our teams practice inclusive, trauma-informed communication
									and collaborate with families and clinicians as you choose. We
									make information accessible and decisions shared—so you stay
									in control.
								</p>

								{/* Pill row */}
								<div className="mt-8 flex flex-wrap gap-2">
									<Pill>Listening First</Pill>
									<Pill>Dignity & Rights</Pill>
									<Pill>Choice & Control</Pill>
									<Pill>Inclusive & Culturally Safe</Pill>
								</div>

								{/* Primary CTAs */}
								<div className="mt-8 flex flex-wrap gap-4">
									<a
										href="/#services"
										className="inline-flex items-center justify-center px-6 py-3 text-white bg-mto-blue hover:bg-mto-orange rounded-lg border border-mto-blue shadow-sm transition-colors"
									>
										Explore our services
									</a>
									<a
										href="/#contact-form"
										className="inline-flex items-center justify-center px-6 py-3 text-coolGray-800 bg-white hover:bg-coolGray-100 rounded-lg border border-coolGray-200 shadow-sm transition-colors"
									>
										Contact us
									</a>
								</div>
							</div>
						</aside>

						{/* Right: cohesive vertical timeline */}
						<div className="lg:col-span-7">
							<ol className="relative border-l border-coolGray-200 pl-6">
								<TimelineItem
									title="Welcome, consent & privacy"
									body="We start with clear introductions, informed consent, and respect for your privacy and boundaries—so you can engage with confidence."
								/>
								<TimelineItem
									title="Your voice in planning"
									body="We listen to your story, language preferences, culture, routines, and goals, then co-design a plan around what matters to you."
								/>
								<TimelineItem
									title="Accessible, inclusive communication"
									body="Plain language, visual supports where needed, and interpreters by request—so information is easy to understand and act on."
								/>
								<TimelineItem
									title="Upholding dignity every day"
									body="From personal care to community access, we protect your autonomy and choices—checking in, seeking permission, and adapting respectfully."
								/>
							</ol>
						</div>
					</div>

					{/* Integrated testimonial (reinforcing respect) */}
					<figure className="mt-10 rounded-2xl border border-coolGray-200 bg-white p-6 md:p-8 shadow-sm">
						<svg
							className="h-8 w-8 text-mto-orange/30"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M7.17 6C5.97 6 5 6.97 5 8.17v4.66C5 14.03 5.97 15 7.17 15h2.66C11.03 15 12 14.03 12 12.83V8.17C12 6.97 11.03 6 9.83 6H7.17zm8 0C14 6 13 6.97 13 8.17v4.66C13 14.03 14 15 15.17 15h2.66C19.03 15 20 14.03 20 12.83V8.17C20 6.97 19.03 6 17.83 6h-2.66z" />
						</svg>
						<blockquote className="mt-4 text-coolGray-700 md:text-lg">
							“Mighty Orchid Services is like my second family—always very
							supportive, easy to communicate with and all-together wonderful.”
						</blockquote>
						<figcaption className="mt-3 text-sm text-coolGray-500">
							— Rebecca Matthews, Participant
						</figcaption>
					</figure>

					{/* Micro-CTA under testimonial */}
					<div className="mt-6">
						<a
							href="/team"
							className="inline-flex items-center gap-2 text-mto-blue hover:text-mto-orange font-medium"
						>
							Meet the people who uphold respect
							<svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
								<path
									fillRule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l5 5a.997.997 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
								<title>Arrow pointing right</title>
							</svg>
						</a>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}

/* ---------- small, consistent building blocks ---------- */

function Pill({ children }: { children: React.ReactNode }) {
	return (
		<span className="inline-flex items-center px-3 py-1 rounded-full bg-coolGray-100 text-coolGray-700 text-sm border border-coolGray-200">
			{children}
		</span>
	);
}

function TimelineItem({
	title,
	body,
}: {
	title: string;
	body: string;
}) {
	return (
		<li className="mb-8 last:mb-0">
			<div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-white border-2 border-mto-orange" />
			<h3 className="text-lg font-semibold text-coolGray-900">{title}</h3>
			<p className="mt-2 text-coolGray-700 leading-relaxed">{body}</p>
		</li>
	);
}
