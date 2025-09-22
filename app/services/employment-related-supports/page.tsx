import Image from "next/image";
import { Footer, Header } from "../../components";

export default function EmploymentRelatedSupportsPage() {
	return (
		<>
			<Header />

			{/* HERO */}
			<section
				className="relative bg-white"
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
								Employment Related Supports
							</h1>
							<p className="mt-5 text-lg md:text-xl text-coolGray-600">
								Employment-related supports are tailored services that help you
								find, secure, and thrive in the right job. We focus on your
								strengths and interests, building skills and workplace
								confidence while working with employers to create safe,
								inclusive roles.
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
									src="/stock/pexels-shkrabaanthony-6281439.jpg"
									alt="Supporting successful employment outcomes"
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
							title="Job readiness"
							desc="Build a great resume, practice interviews, and learn the routines that help you start well."
						/>
						<Outcome
							title="Right role, right fit"
							desc="We align roles to your strengths, interests, and capacity—so work feels achievable and meaningful."
						/>
						<Outcome
							title="Succeed & grow"
							desc="On-the-job coaching, problem-solving, and communication support to keep you progressing."
						/>
					</div>
				</div>
			</section>

			{/* INCLUSIONS / EXCLUSIONS */}
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
										<CheckIcon /> Vocational profiling (strengths, interests,
										capacity)
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Resume, cover letters & interview preparation
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Job search, applications & employer engagement
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Work trials, onboarding & job carving where
										suitable
									</li>
									<li className="flex gap-3">
										<CheckIcon /> On-the-job coaching & communication support
									</li>
									<li className="flex gap-3">
										<CheckIcon /> Travel training, routine building & work
										stamina
									</li>
								</ul>
							</div>
							<div className="p-6 md:p-8">
								<h2 className="text-xl font-semibold text-coolGray-900 mb-4">
									What’s not included
								</h2>
								<ul className="space-y-2 text-coolGray-700">
									<li className="flex gap-3">
										<XIcon /> Wages or employer subsidies
									</li>
									<li className="flex gap-3">
										<XIcon /> Clinical therapy (OT, physio, psychology)
									</li>
									<li className="flex gap-3">
										<XIcon /> Formal training course fees
									</li>
									<li className="flex gap-3">
										<XIcon /> Purchase of personal devices or uniforms (unless
										funded elsewhere)
									</li>
								</ul>
								<p className="mt-4 text-sm text-coolGray-500">
									<em>Note:</em> Funding often aligns with{" "}
									<strong>Finding and Keeping a Job</strong> (Capacity Building)
									or <strong>School Leaver Employment Supports (SLES)</strong>,
									depending on your plan.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* WHO IT'S FOR / PATHWAYS */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-12">
					<div className="grid lg:grid-cols-2 gap-10">
						<div>
							<h3 className="text-2xl font-semibold text-coolGray-900">
								Who is it for?
							</h3>
							<p className="mt-3 text-coolGray-700 leading-relaxed">
								People who want practical help to prepare for work, get a job,
								and keep a job—whether you’re just starting out, returning to
								work, or changing roles. Supports are tailored to your goals and
								the type of workplace you prefer.
							</p>
							<ul className="mt-4 space-y-2 text-coolGray-700">
								<li className="flex gap-3">
									<DotIcon /> School leavers and first-time job seekers
								</li>
								<li className="flex gap-3">
									<DotIcon /> People re-entering work after a break
								</li>
								<li className="flex gap-3">
									<DotIcon /> Those wanting to increase hours or
									responsibilities
								</li>
								<li className="flex gap-3">
									<DotIcon /> Anyone needing coaching to maintain employment
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-2xl font-semibold text-coolGray-900">
								Pathways we support
							</h3>
							<p className="mt-3 text-coolGray-700 leading-relaxed">
								We partner with you across different pathways toward paid work:
							</p>
							<ul className="mt-4 grid sm:grid-cols-2 gap-2 text-coolGray-700">
								<li className="flex gap-3">
									<DotIcon /> Open employment
								</li>
								<li className="flex gap-3">
									<DotIcon /> Traineeships & apprenticeships
								</li>
								<li className="flex gap-3">
									<DotIcon /> Work experience & volunteering
								</li>
								<li className="flex gap-3">
									<DotIcon /> Micro-enterprise exploration
								</li>
								<li className="flex gap-3">
									<DotIcon /> SLES transition activities
								</li>
								<li className="flex gap-3">
									<DotIcon /> Workplace adjustments & coaching
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
						How Employment Supports work with MTOS
					</h2>
					<div className="mt-8 grid md:grid-cols-4 gap-6">
						<Step
							num={1}
							title="Profile & goals"
							desc="We map your strengths, interests, capacity, and job goals—then agree on a plan together."
						/>
						<Step
							num={2}
							title="Preparation"
							desc="Resume, scripts, interview practice, and building work routines, travel, and stamina."
						/>
						<Step
							num={3}
							title="Job search & onboarding"
							desc="Applications, employer engagement, work trials and supported starts where suitable."
						/>
						<Step
							num={4}
							title="Coaching & growth"
							desc="On-the-job support, problem-solving, and reviews to progress responsibilities or hours."
						/>
					</div>
				</div>
			</section>

			{/* EMPLOYER ENGAGEMENT & FUNDING CALLOUT */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-20">
					<div className="rounded-2xl border border-coolGray-200 p-6 md:p-8 shadow-sm bg-white">
						<h3 className="text-xl font-semibold text-coolGray-900">
							Employer engagement & funding
						</h3>
						<p className="mt-3 text-coolGray-700 leading-relaxed">
							We work with employers on role design, communication preferences,
							reasonable adjustments, and onboarding—so you and the workplace
							feel supported. We also keep coordinators and families in the loop
							as you prefer, and review outcomes regularly to ensure supports
							match your goals.
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
