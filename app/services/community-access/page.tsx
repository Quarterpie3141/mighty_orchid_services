import Image from "next/image";
import { Footer, Header } from "../../components";

export default function CommunityAccessPage() {
	return (
		<>
			<Header />

			{/* HERO */}
			<section
				className="relative bg-white pt-24"
				style={{
					backgroundImage: 'url("/svg/pattern-white.svg")',
					backgroundPosition: "center",
				}}
			>
				<div className="container mx-auto px-4 py-20 md:py-28">
					<div className="grid lg:grid-cols-12 gap-10 items-center">
						<div className="lg:col-span-7">
							<span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-orange font-medium uppercase rounded-full">
								Services
							</span>
							<h1 className="text-3xl md:text-5xl font-bold tracking-tight text-coolGray-900">
								Community Access
							</h1>
							<p className="mt-5 text-lg md:text-xl text-coolGray-600">
								Community access involves providing support to ensure you
								maintain connections with friends, family, and your favourite
								places, and to participate in local community events and
								activities. We focus on confidence, choice, and meaningful
								participation.
							</p>

							<div className="mt-8 flex flex-wrap gap-4">
								<a
									href="/referrals"
									className="inline-flex items-center justify-center px-6 py-3 text-white bg-mto-blue hover:bg-mto-orange rounded-lg border border-mto-blue shadow-sm transition-colors"
								>
									Start a referral
								</a>
								<a
									href="/#contact-form"
									className="inline-flex items-center justify-center px-6 py-3 text-coolGray-800 bg-white hover:bg-coolGray-100 rounded-lg border border-coolGray-200 shadow-sm transition-colors"
								>
									Ask a question
								</a>
							</div>
						</div>

						<div className="lg:col-span-5">
							<div className="relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-coolGray-200">
								<Image
									src="/stock/pexels-elevate-3009769.jpg"
									alt="Getting out and about with support"
									width={960}
									height={720}
									className="object-cover w-full h-full"
									priority
								/>
								<div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/0 via-transparent to-transparent" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* KEY OUTCOMES */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-12">
					<div className="grid md:grid-cols-3 gap-6">
						<Outcome
							title="Stay connected"
							desc="Maintain relationships with family and friends, and feel confident taking part in community life."
						/>
						<Outcome
							title="Do what you enjoy"
							desc="Access hobbies, sport, recreation, and local events with practical support along the way."
						/>
						<Outcome
							title="Build skills"
							desc="Travel training, social communication, money handling, planning and problem-solving."
						/>
					</div>
				</div>
			</section>

			{/* INCLUSIONS / EXCLUSIONS (comparison table) */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-12">
					<div className="rounded-2xl overflow-hidden ring-1 ring-coolGray-200 shadow-sm bg-white">
						<div className="grid md:grid-cols-2">
							<div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-coolGray-200">
								<h2 className="text-xl font-semibold text-coolGray-900 mb-4">
									What’s included
								</h2>
								<ul className="space-y-2 text-coolGray-700">
									<li className="flex gap-3">
										<CheckIcon /> Support to attend appointments, programs &
										events
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Social and community participation (1:1 or
										small group)
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Travel training & way-finding (public
										transport or car)
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Assistance with money handling for activities
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Safety planning and communication support
									</li>
								</ul>
							</div>
							<div className="p-6 md:p-8">
								<h2 className="text-xl font-semibold text-coolGray-900 mb-4">
									What’s not included
								</h2>
								<ul className="space-y-2 text-coolGray-700">
									<li className="flex gap-3">
										<XIcon /> Clinical therapy (OT, physio, psychology)
									</li>
									<li className="flex gap-3">
										<XIcon /> Support coordination or plan management
									</li>
									<li className="flex gap-3">
										<XIcon /> Vehicle purchase or major modifications
									</li>
								</ul>
								<p className="mt-4 text-sm text-coolGray-500">
									<em>Note:</em> This service is typically funded under{" "}
									<strong>
										Assistance with Social & Community Participation
									</strong>{" "}
									(Core) or related Capacity Building categories.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* WHO IT'S FOR / EXAMPLE ACTIVITIES */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-12">
					<div className="grid lg:grid-cols-2 gap-10">
						<div>
							<h3 className="text-2xl font-semibold text-coolGray-900">
								Who is Community Access for?
							</h3>
							<p className="mt-3 text-coolGray-700 leading-relaxed">
								People who want practical help to get out and about—staying
								connected with family and friends, joining groups, trying new
								activities, or attending appointments. Supports are tailored to
								your interests, goals, and routines.
							</p>
							<ul className="mt-4 space-y-2 text-coolGray-700">
								<li className="flex gap-3">
									<DotIcon /> Confidence building in public settings
								</li>
								<li className="flex gap-3">
									<DotIcon /> Support for social communication
								</li>
								<li className="flex gap-3">
									<DotIcon /> Assistance with planning and getting there
								</li>
								<li className="flex gap-3">
									<DotIcon /> Safety awareness and community navigation
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-2xl font-semibold text-coolGray-900">
								Example activities
							</h3>
							<p className="mt-3 text-coolGray-700 leading-relaxed">
								Your plan reflects what matters to you. Here are common examples
								we support:
							</p>
							<ul className="mt-4 grid sm:grid-cols-2 gap-2 text-coolGray-700">
								<li className="flex gap-3">
									<DotIcon /> Visiting family & friends
								</li>
								<li className="flex gap-3">
									<DotIcon /> Sports, gym, swimming
								</li>
								<li className="flex gap-3">
									<DotIcon /> Classes, clubs & groups
								</li>
								<li className="flex gap-3">
									<DotIcon /> Parks, libraries, museums
								</li>
								<li className="flex gap-3">
									<DotIcon /> Shopping & markets
								</li>
								<li className="flex gap-3">
									<DotIcon /> Events & festivals
								</li>
								<li className="flex gap-3">
									<DotIcon /> Appointments & programs
								</li>
								<li className="flex gap-3">
									<DotIcon /> Volunteering
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* HOW IT WORKS — NUMBERED STEPS */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-16">
					<h2 className="text-2xl md:text-3xl font-semibold text-coolGray-900 text-center">
						How Community Access works with MTOS
					</h2>
					<div className="mt-8 grid md:grid-cols-4 gap-6">
						<Step
							num={1}
							title="Goals & interests"
							desc="We discuss what you want to do and where you want to go—your pace, your preferences."
						/>
						<Step
							num={2}
							title="Plan & schedule"
							desc="We set days, times, transport, budgeting, and any accessibility needs."
						/>
						<Step
							num={3}
							title="Support in the community"
							desc="Your worker provides practical assistance, encouragement, and safety oversight."
						/>
						<Step
							num={4}
							title="Review & grow"
							desc="We check what worked, build skills, and expand activities as confidence grows."
						/>
					</div>
				</div>
			</section>

			{/* TRANSPORT & SAFETY CALLOUT */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-20">
					<div className="rounded-2xl border border-coolGray-200 p-6 md:p-8 shadow-sm bg-white">
						<h3 className="text-xl font-semibold text-coolGray-900">
							Transport & Safety
						</h3>
						<p className="mt-3 text-coolGray-700 leading-relaxed">
							We work to your preferred transport—public transport, walking, or
							in-vehicle where appropriate—while following your risk strategies
							and safety plan. Our team communicates changes early and keeps
							families and coordinators in the loop as you prefer.
						</p>
						<div className="mt-6 flex flex-wrap gap-4">
							<a
								href="/referrals"
								className="inline-flex items-center justify-center px-6 py-3 text-white bg-mto-blue hover:bg-mto-orange rounded-lg border border-mto-blue shadow-sm transition-colors"
							>
								Start a referral
							</a>
							<a
								href="/contact"
								className="inline-flex items-center justify-center px-6 py-3 text-coolGray-800 bg-white hover:bg-coolGray-100 rounded-lg border border-coolGray-200 shadow-sm transition-colors"
							>
								Talk to the team
							</a>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}

/* ---------- small building blocks ---------- */

function Outcome({ title, desc }: { title: string; desc: string }) {
	return (
		<div className="rounded-xl border border-coolGray-200 p-6 shadow-sm bg-white">
			<h3 className="text-lg font-semibold text-coolGray-900">{title}</h3>
			<p className="mt-2 text-coolGray-700">{desc}</p>
		</div>
	);
}

function Step({
	num,
	title,
	desc,
}: { num: number; title: string; desc: string }) {
	return (
		<div className="rounded-xl border border-coolGray-200 p-6 bg-white shadow-sm">
			<div className="flex items-center gap-3">
				<div className="h-8 w-8 rounded-full bg-mto-orange text-white flex items-center justify-center text-sm font-bold">
					{num}
				</div>
				<h4 className="text-base font-semibold text-coolGray-900">{title}</h4>
			</div>
			<p className="mt-3 text-coolGray-700">{desc}</p>
		</div>
	);
}

function CheckIcon() {
	return (
		<svg
			className="mt-1 h-5 w-5 text-mto-orange flex-none"
			viewBox="0 0 20 20"
			fill="currentColor"
			aria-hidden="true"
		>
			<path
				fillRule="evenodd"
				d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

function XIcon() {
	return (
		<svg
			className="mt-1 h-5 w-5 text-coolGray-400 flex-none"
			viewBox="0 0 20 20"
			fill="currentColor"
			aria-hidden="true"
		>
			<path
				fillRule="evenodd"
				d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

function DotIcon() {
	return (
		<svg
			className="mt-1 h-3 w-3 text-mto-orange flex-none"
			viewBox="0 0 8 8"
			fill="currentColor"
			aria-hidden="true"
		>
			<circle cx="4" cy="4" r="4" />
		</svg>
	);
}
