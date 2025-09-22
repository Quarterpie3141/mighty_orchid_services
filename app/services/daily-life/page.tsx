import Image from "next/image";
import { Footer, Header } from "../../components";

export default function DailyLifePage() {
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
								Daily Life
							</h1>
							<p className="mt-5 text-lg md:text-xl text-coolGray-600">
								Daily life encompasses the activities you do to stay safe,
								healthy, and connected—like cleaning, laundry, meal prep,
								grocery shopping, paying bills, and managing routines. We
								provide practical, person-centred support that builds confidence
								and independence.
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
									src="/stock/pexels-nadiia-doloh-202387951-11597661.jpg"
									alt="Practical support with daily routines"
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
							title="Safer routines"
							desc="Set up predictable routines and reminders that keep home life safe and less stressful."
						/>
						<Outcome
							title="Health & wellbeing"
							desc="Meal planning, shopping, and prompts that support nutrition, medication routines, and appointments."
						/>
						<Outcome
							title="Greater independence"
							desc="Build skills at your pace—budgeting, bill payments, cleaning, and time management."
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
										<CheckIcon /> Light domestic assistance (kitchen, bathroom,
										living areas)
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Laundry & linen changes
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Meal planning, prep, and safe food handling
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Grocery shopping & list-making
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Bill paying support & budgeting prompts
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Routine building & reminders (meds as per
										plan)
									</li>
								</ul>
							</div>
							<div className="p-6 md:p-8">
								<h2 className="text-xl font-semibold text-coolGray-900 mb-4">
									What’s not included
								</h2>
								<ul className="space-y-2 text-coolGray-700">
									<li className="flex gap-3">
										<XIcon /> Major home renovations or repairs
									</li>
									<li className="flex gap-3">
										<XIcon /> Clinical therapy (OT, physio, psychology)
									</li>
									<li className="flex gap-3">
										<XIcon /> Specialist cleaning (e.g., end-of-lease,
										biohazard)
									</li>
								</ul>
								<p className="mt-4 text-sm text-coolGray-500">
									<em>Note:</em> This service is typically funded under{" "}
									<strong>Assistance with Daily Living</strong> (Core) or
									related categories.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* WHO IT'S FOR / COMMON SUPPORTS */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-12">
					<div className="grid lg:grid-cols-2 gap-10">
						<div>
							<h3 className="text-2xl font-semibold text-coolGray-900">
								Who is Daily Life support for?
							</h3>
							<p className="mt-3 text-coolGray-700 leading-relaxed">
								People who want practical help to manage home tasks and
								routines, stay organised, and build skills to do more
								independently. Supports are tailored to your goals and how you
								like things done.
							</p>
							<ul className="mt-4 space-y-2 text-coolGray-700">
								<li className="flex gap-3">
									<DotIcon /> Establishing or maintaining routines
								</li>
								<li className="flex gap-3">
									<DotIcon /> Reducing overwhelm with step-by-step support
								</li>
								<li className="flex gap-3">
									<DotIcon /> Safety prompts around cooking & appliances
								</li>
								<li className="flex gap-3">
									<DotIcon /> Building confidence in home management
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-2xl font-semibold text-coolGray-900">
								Common supports we provide
							</h3>
							<p className="mt-3 text-coolGray-700 leading-relaxed">
								We focus on what matters to you at home. Here are frequent
								examples:
							</p>
							<ul className="mt-4 grid sm:grid-cols-2 gap-2 text-coolGray-700">
								<li className="flex gap-3">
									<DotIcon /> Meal planning & cooking together
								</li>
								<li className="flex gap-3">
									<DotIcon /> Cleaning & organising
								</li>
								<li className="flex gap-3">
									<DotIcon /> Laundry, ironing, and linen
								</li>
								<li className="flex gap-3">
									<DotIcon /> Fridge/pantry set-up & expiry checks
								</li>
								<li className="flex gap-3">
									<DotIcon /> Budgeting & paying bills
								</li>
								<li className="flex gap-3">
									<DotIcon /> Calendar, reminders & appointments
								</li>
								<li className="flex gap-3">
									<DotIcon /> Safe use of appliances
								</li>
								<li className="flex gap-3">
									<DotIcon /> Light yard or balcony upkeep
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
						How Daily Life works with MTOS
					</h2>
					<div className="mt-8 grid md:grid-cols-4 gap-6">
						<Step
							num={1}
							title="Goals & preferences"
							desc="We discuss what’s hardest and what you want to improve—your standards, your routines."
						/>
						<Step
							num={2}
							title="Plan & schedule"
							desc="We set visit times, tasks, safety notes, and any shopping or transport needs."
						/>
						<Step
							num={3}
							title="Support at home"
							desc="Your worker provides practical help and coaching—doing tasks with you where possible."
						/>
						<Step
							num={4}
							title="Review & progress"
							desc="We check what’s working, adjust tasks and frequency, and build independence over time."
						/>
					</div>
				</div>
			</section>

			{/* BUDGETING & FLEXIBILITY CALLOUT */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-20">
					<div className="rounded-2xl border border-coolGray-200 p-6 md:p-8 shadow-sm bg-white">
						<h3 className="text-xl font-semibold text-coolGray-900">
							Budgeting & Flexibility
						</h3>
						<p className="mt-3 text-coolGray-700 leading-relaxed">
							Daily Life supports are usually scheduled across the week and can
							be adjusted around your routines, energy levels, and appointments.
							We communicate changes early and keep families and coordinators in
							the loop as you prefer.
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
