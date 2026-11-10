import Image from "next/image";
import { Footer, Header } from "../../components";

export const metadata = {
	title: {
		absolute: "NDIS Nursing Supports | Mighty Orchid Services",
	},
	description:
		"Registered Nurse-led delegation and supervision of care for NDIS participants: assessments, support plans, and training for support workers.",
};

export default function NursingSupportsPage() {
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
								Nursing Supports
							</h1>
							<p className="mt-5 text-lg md:text-xl text-coolGray-600">
								Registered Nurse-led support, so your support workers can safely
								help with your health-related care at home and in the community.
							</p>
							<div className="mt-8 flex flex-wrap gap-4">
								<a
									href="/referrals"
									className="inline-flex items-center justify-center px-6 py-3 text-white bg-mto-blue hover:bg-mto-orange rounded-lg border border-mto-blue shadow-sm transition-colors"
								>
									Make a referral
								</a>
								<a
									href="tel:+61851067301"
									className="inline-flex items-center justify-center px-6 py-3 text-coolGray-800 bg-white hover:bg-coolGray-100 rounded-lg border border-coolGray-200 shadow-sm transition-colors"
								>
									Call 08 5106 7301
								</a>
							</div>
						</div>

						<div className="lg:col-span-5">
							<div className="relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-coolGray-200">
								<Image
									src="/stock/bruno-rodrigues-279xIHymPYY-unsplash.jpg"
									alt="A nurse supporting a person at home"
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

			{/* REGISTRATION */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-12">
					<div className="rounded-2xl border border-coolGray-200 p-6 md:p-8 shadow-sm bg-white">
						<h2 className="text-xl font-semibold text-coolGray-900">
							Registered for Community Nursing Care
						</h2>
						<p className="mt-3 text-coolGray-700 leading-relaxed">
							Mighty Orchid Services is registered with the NDIS Commission to
							provide community nursing care for people with high support needs.
						</p>
					</div>
				</div>
			</section>

			{/* HOW OUR NURSING SUPPORTS HELP */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-12">
					<div className="grid lg:grid-cols-2 gap-10">
						<div>
							<h2 className="text-2xl font-semibold text-coolGray-900">
								How our nursing supports help
							</h2>
							<p className="mt-3 text-coolGray-700 leading-relaxed">
								Some health-related tasks can be safely done by support workers
								once a Registered Nurse has assessed the person, written a plan
								and trained the workers.
							</p>
							<p className="mt-3 text-coolGray-700 leading-relaxed">
								This is called delegation and supervision of care. Our
								Registered Nurse stays involved, checks in regularly and updates
								the plan as your needs change.
							</p>
						</div>
						<div>
							<h2 className="text-2xl font-semibold text-coolGray-900">
								Who it is for
							</h2>
							<ul className="mt-4 space-y-2 text-coolGray-700">
								<li className="flex gap-3">
									<DotIcon /> NDIS participants with disability-related health
									supports in their plan
								</li>
								<li className="flex gap-3">
									<DotIcon />
									<span>
										People in{" "}
										<a
											href="/services/service-supported-independent-living-(SIL)"
											className="text-mto-orange underline hover:text-mto-blue"
										>
											Supported Independent Living
										</a>{" "}
										or receiving{" "}
										<a
											href="/services/high-intensity-support"
											className="text-mto-orange underline hover:text-mto-blue"
										>
											High Intensity Supports
										</a>
									</span>
								</li>
								<li className="flex gap-3">
									<DotIcon /> People leaving hospital who need care set up at
									home
								</li>
								<li className="flex gap-3">
									<DotIcon /> Support coordinators looking for a registered
									provider for delegation and supervision of care
								</li>
							</ul>
							<p className="mt-4 text-sm text-coolGray-500">
								Nursing supports can be funded through your NDIS plan. Your
								support coordinator or Local Area Coordinator can talk to you
								about your plan.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* WHAT DELEGATION AND SUPERVISION INCLUDES */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-16">
					<h2 className="text-2xl md:text-3xl font-semibold text-coolGray-900 text-center">
						What delegation and supervision includes
					</h2>
					<div className="mt-8 grid md:grid-cols-5 gap-6">
						<Step
							num={1}
							title="Health assessment"
							desc="Our RN assesses your health needs, and reassesses them over time."
						/>
						<Step
							num={2}
							title="Home check"
							desc="An environmental assessment to make sure care can be given safely where you live."
						/>
						<Step
							num={3}
							title="Support plan"
							desc="A written plan for each health task, updated as your needs change."
						/>
						<Step
							num={4}
							title="Training"
							desc="Support workers are trained and checked for competency in each task."
						/>
						<Step
							num={5}
							title="Ongoing supervision"
							desc="Our RN keeps oversight of the care and reports on how it is going."
						/>
					</div>
				</div>
			</section>

			{/* HEALTH SUPPORTS WE CAN HELP WITH */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-16">
					<h2 className="text-2xl md:text-3xl font-semibold text-coolGray-900 text-center">
						Health supports we can help with
					</h2>
					<p className="mt-3 text-center text-coolGray-600 max-w-3xl mx-auto">
						Our Registered Nurse provides delegation and supervision of care
						across all of these areas.
					</p>
					<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<Area
							title="Continence supports"
							desc="Continence and toileting care, catheter management and bowel care."
						/>
						<Area
							title="Wound and pressure care"
							desc="Complex and slow-to-heal wounds, pressure injury prevention, skin integrity and repositioning."
						/>
						<Area
							title="Dysphagia supports"
							desc="Eating, drinking and swallowing support, and mealtime management in line with speech pathology plans."
						/>
						<Area
							title="Respiratory supports"
							desc="Tracheostomy, ventilator and airway management, and breathing support and planning."
						/>
						<Area
							title="Nutrition supports"
							desc="Enteral feeding and management, such as PEG and nasogastric, with nutrition and hydration planning."
						/>
						<Area
							title="Diabetes management and injections"
							desc="Blood glucose monitoring, and insulin and other subcutaneous injections under prescriber orders."
						/>
						<Area
							title="Seizure and epilepsy supports"
							desc="Seizure monitoring and management, and epilepsy management plans."
						/>
						<Area
							title="Podiatry and foot care"
							desc="Foot, ankle and lower-limb assessment and care planning, alongside podiatry."
						/>
						<Area
							title="Specialist supports"
							desc="Recently acquired severe conditions, such as spinal cord injury or acquired brain injury."
						/>
						<Area
							title="Access to health services"
							desc="Help getting to health and mental health services for people with complex needs."
						/>
						<Area
							title="Training for workers and families"
							desc="Training support workers, family and carers to provide health supports safely."
						/>
					</div>
				</div>
			</section>

			{/* MEET OUR NURSE */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-16">
					<div className="rounded-2xl border border-coolGray-200 p-6 md:p-8 shadow-sm bg-white">
						<h2 className="text-2xl font-semibold text-coolGray-900">
							Meet our nurse
						</h2>
						<div className="mt-4 grid lg:grid-cols-3 gap-8">
							<div className="lg:col-span-1">
								<Image
									src="/team-assets/Amy.jpg"
									alt="Amy Halvorsen, Registered Nurse"
									width={1001}
									height={1110}
									className="rounded-xl w-full h-auto object-cover shadow-sm ring-1 ring-coolGray-200"
								/>
								<p className="mt-3 text-coolGray-900 font-medium">
									Amy Halvorsen
								</p>
								<p className="text-coolGray-600">
									Disability Care Manager and Registered Nurse
								</p>
							</div>
							<div>
								<p className="text-coolGray-700 leading-relaxed">
									Amy began her career in neurosurgery and major trauma at one
									of Australia&apos;s largest tertiary hospitals, after
									completing her Bachelor of Nursing in 2018. She has since
									worked across hospital, community, wellness, aged care and
									disability settings.
								</p>
								<p className="mt-3 text-coolGray-700 leading-relaxed">
									She is experienced in health assessment, care planning,
									medication administration, wound care and chronic disease
									management, and builds trusting relationships with
									participants, families and support teams, with a strong focus
									on dignity, respect and independence.
								</p>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-coolGray-900">
									Qualifications and checks
								</h3>
								<ul className="mt-3 space-y-2 text-coolGray-700">
									<li className="flex gap-3">
										<DotIcon />
										<span>
											Bachelor of Nursing, University of Notre Dame, Sydney
										</span>
									</li>
									<li className="flex gap-3">
										<DotIcon />
										<span>AHPRA Registered Nurse</span>
									</li>
									<li className="flex gap-3">
										<DotIcon />
										<span>Advanced Life Support, and First Aid and CPR</span>
									</li>
									<li className="flex gap-3">
										<DotIcon />
										<span>Cardiac Rhythm Interpretation and Management</span>
									</li>
									<li className="flex gap-3">
										<DotIcon />
										<span>
											National Police Check, Working With Children Check and
											NDIS Clearance
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* WHERE WE PROVIDE NURSING SUPPORTS */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-16">
					<h2 className="text-2xl md:text-3xl font-semibold text-coolGray-900 text-center">
						Where we provide nursing supports
					</h2>
					<div className="mt-8 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
						<Office
							city="Karratha"
							lines={["Unit 51, 5-15 Sharpe Avenue", "Karratha WA 6714"]}
						/>
						<Office
							city="South Hedland"
							lines={["Unit 22, 1 Lawson Street", "South Hedland WA 6722"]}
						/>
					</div>
					<p className="mt-6 text-center text-coolGray-700">
						Contact us to check availability in your area.
					</p>
				</div>
			</section>

			{/* COMMON QUESTIONS */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-16">
					<h2 className="text-2xl md:text-3xl font-semibold text-coolGray-900 text-center">
						Common questions
					</h2>
					<div className="mt-8 max-w-3xl mx-auto space-y-6">
						<Question q="What is delegation and supervision of care?">
							It is when a Registered Nurse assesses a health-related task,
							writes a plan, trains support workers to do it safely, and then
							keeps supervising the care.
						</Question>
						<Question q="How do I get nursing supports funded?">
							Nursing supports can be included in your NDIS plan. Talk to your
							support coordinator or Local Area Coordinator about your plan.
						</Question>
						<Question q="How do I make a referral?">
							Use our referral form, call us or email info@mtos.com.au. Please
							include the funded nursing hours if you have them.
						</Question>
					</div>
				</div>
			</section>

			{/* CLOSING BANNER */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-20">
					<div className="rounded-2xl border border-coolGray-200 p-6 md:p-8 shadow-sm bg-white">
						<h2 className="text-xl font-semibold text-coolGray-900">
							Talk to us about nursing supports
						</h2>
						<p className="mt-3 text-coolGray-700 leading-relaxed">
							Call{" "}
							<a
								href="tel:+61851067301"
								className="text-mto-orange font-medium underline hover:text-mto-blue"
							>
								08 5106 7301
							</a>
							, email{" "}
							<a
								href="mailto:info@mtos.com.au"
								className="text-mto-orange font-medium underline hover:text-mto-blue"
							>
								info@mtos.com.au
							</a>{" "}
							or send a referral.
						</p>
						<div className="mt-6 flex flex-wrap gap-4">
							<a
								href="/referrals"
								className="inline-flex items-center justify-center px-6 py-3 text-white bg-mto-blue hover:bg-mto-orange rounded-lg border border-mto-blue shadow-sm transition-colors"
							>
								Make a referral
							</a>
							<a
								href="mailto:info@mtos.com.au"
								className="inline-flex items-center justify-center px-6 py-3 text-coolGray-800 bg-white hover:bg-coolGray-100 rounded-lg border border-coolGray-200 shadow-sm transition-colors"
							>
								Email us
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
			</div>
			<h4 className="mt-3 text-base font-semibold text-coolGray-900">
				{title}
			</h4>
			<p className="mt-2 text-coolGray-700">{desc}</p>
		</div>
	);
}

function Area({ title, desc }: { title: string; desc: string }) {
	return (
		<div className="rounded-xl border border-coolGray-200 p-6 shadow-sm bg-white">
			<h3 className="text-lg font-semibold text-coolGray-900">{title}</h3>
			<p className="mt-2 text-coolGray-700">{desc}</p>
		</div>
	);
}

function Office({ city, lines }: { city: string; lines: string[] }) {
	return (
		<div className="rounded-xl border border-coolGray-200 p-6 shadow-sm bg-white">
			<h3 className="text-lg font-semibold text-coolGray-900">{city}</h3>
			<address className="mt-2 not-italic text-coolGray-700">
				{lines.map((line) => (
					<span key={line} className="block">
						{line}
					</span>
				))}
			</address>
		</div>
	);
}

function Question({ q, children }: { q: string; children: React.ReactNode }) {
	return (
		<div className="rounded-xl border border-coolGray-200 p-6 shadow-sm bg-white">
			<h3 className="text-lg font-semibold text-coolGray-900">{q}</h3>
			<p className="mt-2 text-coolGray-700 leading-relaxed">{children}</p>
		</div>
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
