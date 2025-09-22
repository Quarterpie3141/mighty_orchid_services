import Image from "next/image";
import { Footer, Header } from "../../components";

export default function SupportedIndependentLivingPage() {
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
								Supported Independent Living (SIL)
							</h1>
							<p className="mt-5 text-lg md:text-xl text-coolGray-600">
								SIL is for people who need regular help with daily life in a
								shared home. Your NDIS plan may include SIL funding so you can
								live with friends or housemates who also have disabilities,
								while our support workers assist with day-to-day tasks and build
								independence.
							</p>
						</div>

						<div className="lg:col-span-5">
							<div className="relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-coolGray-200">
								<Image
									src="/stock/pexels-marcus-aurelius-4063510.jpg"
									alt="Shared living with support"
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
							title="Live safely at home"
							desc="Reliable support with routines, prompts, and personal care so home life is safe and predictable."
						/>
						<Outcome
							title="Grow independence"
							desc="Build skills in cooking, household tasks, budgeting, and decision-making—at your pace."
						/>
						<Outcome
							title="Belong together"
							desc="Share a home with compatible housemates and stay connected with family, friends, and community."
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
									What SIL includes
								</h2>
								<ul className="space-y-2 text-coolGray-700">
									<li className="flex gap-3">
										<CheckIcon /> Personal care (showering, dressing)
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Meal planning and cooking support
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Medication prompts per care plan
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Home routines (light cleaning, laundry)
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Community access aligned to goals
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Day/evening/overnight support (as funded)
									</li>
								</ul>
							</div>
							<div className="p-6 md:p-8">
								<h2 className="text-xl font-semibold text-coolGray-900 mb-4">
									What SIL does not include
								</h2>
								<ul className="space-y-2 text-coolGray-700">
									<li className="flex gap-3">
										<XIcon /> Therapy (OT, physio, psychology)
									</li>
									<li className="flex gap-3">
										<XIcon /> Home modifications or property maintenance
									</li>
								</ul>
								<p className="mt-4 text-sm text-coolGray-500">
									<em>Note:</em> SIL funds the <strong>supports</strong> to live
									in a shared home—not the accommodation costs.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* WHO IT'S FOR / LIVING ARRANGEMENTS */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-12">
					<div className="grid lg:grid-cols-2 gap-10">
						<div>
							<h3 className="text-2xl font-semibold text-coolGray-900">
								Who is SIL suitable for?
							</h3>
							<p className="mt-3 text-coolGray-700 leading-relaxed">
								People who need regular help across the day (and sometimes
								overnight) in order to live safely and participate in home and
								community life. SIL is most suitable when supports are ongoing
								and best delivered in a shared arrangement.
							</p>
							<ul className="mt-4 space-y-2 text-coolGray-700">
								<li className="flex gap-3">
									<DotIcon /> Daily prompts or assistance for personal care
								</li>
								<li className="flex gap-3">
									<DotIcon /> Support with meals, medication, and routines
								</li>
								<li className="flex gap-3">
									<DotIcon /> Supervision for safety or behaviours of concern
								</li>
								<li className="flex gap-3">
									<DotIcon /> Benefits from living with compatible housemates
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-2xl font-semibold text-coolGray-900">
								Living arrangements
							</h3>
							<p className="mt-3 text-coolGray-700 leading-relaxed">
								We help explore location, compatibility, and routines. Where
								helpful, we work with your Support Coordinator and clinicians to
								identify housemates and set expectations together.
							</p>
							<ul className="mt-4 space-y-2 text-coolGray-700">
								<li className="flex gap-3">
									<DotIcon /> You can suggest preferred suburbs or housemates
								</li>
								<li className="flex gap-3">
									<DotIcon /> We consider routines, communication, sensory needs
								</li>
								<li className="flex gap-3">
									<DotIcon /> Trial visits and warm introductions when possible
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* HOW IT WORKS — NUMBERED STEPS (horizontal on md+) */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-16">
					<h2 className="text-2xl md:text-3xl font-semibold text-coolGray-900 text-center">
						How SIL works with MTOS
					</h2>
					<div className="mt-8 grid md:grid-cols-4 gap-6">
						<Step
							num={1}
							title="Conversation & intake"
							desc="We learn your goals, routines, communication and risks so supports are tailored from day one."
						/>
						<Step
							num={2}
							title="Match & setting"
							desc="We work towards compatible housemates and a suitable location and routine."
						/>
						<Step
							num={3}
							title="Roster of Care"
							desc="We propose a roster that aligns staffing with your needs (day/evening/overnight) and share it with the team."
						/>
						<Step
							num={4}
							title="Agreement & start"
							desc="We finalise the service agreement, introduce your team, and start supports with clear notes and check-ins."
						/>
					</div>
				</div>
			</section>

			{/* FUNDING & ROC CALLOUT */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-20">
					<div className="rounded-2xl border border-coolGray-200 p-6 md:p-8 shadow-sm bg-white">
						<h3 className="text-xl font-semibold text-coolGray-900">
							Funding & Roster of Care (RoC)
						</h3>
						<p className="mt-3 text-coolGray-700 leading-relaxed">
							SIL funding is approved by the NDIA based on assessed support
							needs. Your RoC outlines the support hours across the week
							(including overnight where applicable). We review outcomes
							regularly and adjust the roster when needs change—keeping you and
							your supports informed.
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
								Talk to the SIL team
							</a>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}

/* ---------- small building blocks (kept simple & consistent) ---------- */

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
