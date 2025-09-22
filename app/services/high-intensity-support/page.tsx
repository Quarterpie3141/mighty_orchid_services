import Image from "next/image";
import { Footer, Header } from "../../components";

export default function HighIntensitySupportsPage() {
	return (
		<>
			<Header />

			{/* HERO */}
			<section
				className="relative bg-white py-24"
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
								High Intensity Supports
							</h1>
							<p className="mt-5 text-lg md:text-xl text-coolGray-600">
								High intensity supports are specialised services for people with
								complex needs, delivered by skilled staff who can safely assist
								with significant physical or health conditions. We focus on
								dignity, safety, and consistent delivery aligned with your
								clinical plans.
							</p>

							<div className="mt-8 flex flex-wrap gap-4">
								<a
									href="/referrals"
									className="inline-flex items-center justify-center px-6 py-3 text-white bg-mto-blue hover:bg-mto-orange rounded-lg border border-mto-blue shadow-sm transition-colors"
								>
									Start a referral
								</a>
								<a
									href="#contact-form"
									className="inline-flex items-center justify-center px-6 py-3 text-coolGray-800 bg-white hover:bg-coolGray-100 rounded-lg border border-coolGray-200 shadow-sm transition-colors"
								>
									Ask a question
								</a>
							</div>
						</div>

						<div className="lg:col-span-5">
							<div className="relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-coolGray-200">
								<Image
									src="/stock/pexels-matthiaszomer-339620.jpg"
									alt="Skilled support for complex health needs"
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
							title="Safe, skilled delivery"
							desc="Trained workers follow your clinical plans and risk strategies with confidence and consistency."
						/>
						<Outcome
							title="Stability & routine"
							desc="Predictable rosters and clear handovers reduce stress and support better health outcomes."
						/>
						<Outcome
							title="Integrated care"
							desc="We collaborate with clinicians and families so everyone is informed and aligned."
						/>
					</div>
				</div>
			</section>

			{/* INCLUSIONS / EXCLUSIONS (comparison) */}
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
										<CheckIcon /> Complex bowel care (per clinical plan)
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Enteral feeding (PEG/NG) & mealtime management
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Tracheostomy support & suctioning (as trained)
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Ventilator support & respiratory care (under
										plan)
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Urinary catheter care & continence support
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Diabetes support (e.g., BGL prompts) & seizure
										response
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Complex wound care assistance (as directed)
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Pressure care, positioning & manual handling
									</li>
								</ul>
								<p className="mt-4 text-sm text-coolGray-500">
									Delivery is aligned to your clinician-issued health care plans
									and our staff competencies.
								</p>
							</div>
							<div className="p-6 md:p-8">
								<h2 className="text-xl font-semibold text-coolGray-900 mb-4">
									What’s not included
								</h2>
								<ul className="space-y-2 text-coolGray-700">
									<li className="flex gap-3">
										<XIcon /> Medical diagnosis or prescribing
									</li>
									<li className="flex gap-3">
										<XIcon /> Clinical therapy (OT, physio, psychology)
									</li>
									<li className="flex gap-3">
										<XIcon /> Hospital transport without prior arrangement
									</li>
									<li className="flex gap-3">
										<XIcon /> Purchase of medical devices or consumables
									</li>
								</ul>
								<p className="mt-4 text-sm text-coolGray-500">
									<em>Note:</em> This service typically aligns with{" "}
									<strong>High Intensity Daily Personal Activities</strong>{" "}
									funding in NDIS.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* WHO IT'S FOR / CLINICAL GOVERNANCE */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-12">
					<div className="grid lg:grid-cols-2 gap-10">
						<div>
							<h3 className="text-2xl font-semibold text-coolGray-900">
								Who is it for?
							</h3>
							<p className="mt-3 text-coolGray-700 leading-relaxed">
								People who require skilled assistance with complex health
								supports at home or in the community. We tailor staffing,
								training, and rostering to your specific routines, equipment,
								and risk profile.
							</p>
							<ul className="mt-4 space-y-2 text-coolGray-700">
								<li className="flex gap-3">
									<DotIcon /> Ongoing high-intensity health supports
								</li>
								<li className="flex gap-3">
									<DotIcon /> Clear clinical plans from treating practitioners
								</li>
								<li className="flex gap-3">
									<DotIcon /> Need for consistent, competent staff
								</li>
								<li className="flex gap-3">
									<DotIcon /> Coordination with family and clinicians
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-2xl font-semibold text-coolGray-900">
								Clinical governance & training
							</h3>
							<p className="mt-3 text-coolGray-700 leading-relaxed">
								We operate under robust governance: worker competencies,
								medication protocols, manual handling, incident reporting, and
								regular supervision. Staff are trained and refreshed to your
								procedures, with competency sign-offs where required.
							</p>
							<ul className="mt-4 space-y-2 text-coolGray-700">
								<li className="flex gap-3">
									<DotIcon /> Competency-based training & refreshers
								</li>
								<li className="flex gap-3">
									<DotIcon /> Shift notes, handovers & escalation pathways
								</li>
								<li className="flex gap-3">
									<DotIcon /> Equipment checks and infection prevention
								</li>
								<li className="flex gap-3">
									<DotIcon /> Collaboration with clinicians as directed
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
						How High Intensity Supports work with MTOS
					</h2>
					<div className="mt-8 grid md:grid-cols-4 gap-6">
						<Step
							num={1}
							title="Intake & plans"
							desc="We gather your clinical health plans, equipment info, routines, and risk strategies."
						/>
						<Step
							num={2}
							title="Roster & competencies"
							desc="We build a roster with workers trained and signed off for your procedures and equipment."
						/>
						<Step
							num={3}
							title="Safe delivery"
							desc="Supports are delivered to plan with clear notes, handovers, and escalation if needed."
						/>
						<Step
							num={4}
							title="Review & adjust"
							desc="We review outcomes, refresh competencies, and adapt quickly when needs change."
						/>
					</div>
				</div>
			</section>

			{/* SAFEGUARDING CALLOUT */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-20">
					<div className="rounded-2xl border border-coolGray-200 p-6 md:p-8 shadow-sm bg-white">
						<h3 className="text-xl font-semibold text-coolGray-900">
							Safety, incidents & escalation
						</h3>
						<p className="mt-3 text-coolGray-700 leading-relaxed">
							We follow your emergency and escalation procedures, document
							incidents promptly, and keep you, your family, and coordinators
							informed as you prefer. Our priority is safe, respectful
							support—every shift.
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
