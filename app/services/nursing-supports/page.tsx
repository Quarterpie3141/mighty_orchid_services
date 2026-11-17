import Image from "next/image";
import { Footer, Header } from "../../components";

export const metadata = {
	title: {
		absolute: "NDIS Nursing Supports | Mighty Orchid Services",
	},
	description:
		"Registered Nurse-led nursing supports for NDIS participants in the Pilbara: complex bowel care, PEG feeding, tracheostomy, catheters, stoma and wound care, delivered directly or through delegation and supervision.",
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
								Registered Nurse-led clinical care at home and in the community.
								Our nurse can carry out your health supports directly, or train
								and supervise your support workers to do it safely.
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
									src="/stock/nursing-supports-hero.jpg"
									alt="A MTOS nurse reviewing a support plan on a tablet"
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
							Mighty Orchid Services is a registered NDIS provider, compliant
							with the NDIS Practice Standards, for Community Nursing Care
							(0114) and High Intensity Daily Personal Activities (0104).
						</p>
						<p className="mt-3 text-coolGray-700 leading-relaxed">
							Our Registered Nurse works within the Nursing and Midwifery Board
							of Australia (NMBA) frameworks, and we support Agency-Managed,
							Plan-Managed and Self-Managed participants.
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
						Our Registered Nurse can provide these supports directly, or assess,
						train and supervise your support workers to provide them safely.
					</p>
					<div className="mt-8 grid md:grid-cols-2 gap-6">
						<ServiceGroup
							title="Delegation, supervision and worker training"
							intro="We build up the people already around you, so care is safe and consistent."
							items={[
								"Clinical delegation of care: formal assessment and safe delegation of specific high-intensity tasks to qualified disability support workers",
								"Hands-on competency training: practical, participant-specific training and competency sign-off for support workers, family members and informal carers",
								"Ongoing clinical supervision: scheduled oversight, regular competency reviews and continuous monitoring of support teams",
								"Care plans and protocols: writing and auditing clear nursing care plans, risk assessments and emergency escalation pathways",
							]}
						/>
						<ServiceGroup
							title="High intensity daily personal activities"
							intro="Complex, high-risk clinical needs, managed by our Registered Nurse or through delegated supervision."
							items={[
								"Complex bowel care: enemas, suppositories, digital stimulation and neurogenic bowel management plans",
								"Enteral (tube) feeding: PEG, PEJ and nasogastric tube care, pump management, stoma site care and hydration monitoring",
								"Tracheostomy and ventilator support: routine tracheostomy care, suctioning, tube changes, and invasive and non-invasive ventilation including CPAP and BiPAP",
								"Epilepsy and seizure management: seizure monitoring, post-ictal support and emergency rescue medication such as midazolam",
								"Severe dysphagia support: safe mealtime assistance in line with speech pathology plans, to prevent choking and aspiration",
								"Subcutaneous injections and complex medication: insulin, anticoagulants and high-risk medication oversight",
								"Recently acquired severe conditions, such as spinal cord injury or acquired brain injury",
							]}
						/>
						<ServiceGroup
							title="Continence and stoma care"
							intro="Specialised clinical support that protects comfort, dignity and skin health."
							items={[
								"Urinary catheter management: routine changes, insertion, flushing and troubleshooting for indwelling (IDC), suprapubic (SPC) and intermittent catheters",
								"Stoma and ostomy care: appliance changes, peristomal skin integrity care, and management of colostomies, ileostomies and urostomies",
								"Continence assessments: full bladder and bowel assessments to support your ongoing NDIS consumables funding",
							]}
						/>
						<ServiceGroup
							title="Wound, skin and pressure area care"
							intro="Clinical care to heal wounds and protect skin integrity."
							items={[
								"Complex and chronic wound management: assessment, dressing selection and treatment for pressure injuries, ulcers and neuropathic wounds",
								"Pressure injury prevention: regular skin checks, repositioning schedules, and working with occupational therapists on pressure care equipment",
								"Post-hospital wound care: ongoing care for surgical or trauma wounds related to your disability",
								"Foot and lower-limb care: assessment and care planning alongside your podiatrist",
							]}
						/>
						<ServiceGroup
							title="Chronic condition and diabetes management"
							intro="Day-to-day health monitoring that picks up problems early."
							items={[
								"Diabetes care: blood glucose monitoring, insulin administration, continuous glucose monitor (CGM) oversight, and managing hypos and hypers",
								"Ongoing health monitoring: regular checks of vital signs and baseline health, to catch issues early and avoid preventable hospital stays",
							]}
						/>
						<ServiceGroup
							title="Assessments, NDIS reporting and hospital transitions"
							intro="The clinical evidence and coordination that keeps your plan and your care joined up."
							items={[
								"Comprehensive nursing assessments: in-home evaluations to identify disability-related clinical risks and daily support needs",
								"NDIS plan reassessment reports: clinical evidence and documentation for your planning meetings or change of circumstance requests",
								"Hospital-to-home transitions: working with hospital discharge teams for a safe return home or into SIL accommodation",
								"Access to health services: help getting to health and mental health services for people with complex needs",
							]}
						/>
					</div>
				</div>
			</section>

			{/* WHY CHOOSE MTOS */}
			<section className="bg-white">
				<div className="container mx-auto px-4 pb-16">
					<h2 className="text-2xl md:text-3xl font-semibold text-coolGray-900 text-center">
						Why choose Mighty Orchid Services
					</h2>
					<div className="mt-8 grid md:grid-cols-3 gap-6">
						<Area
							title="Registered quality and safety"
							desc="A registered NDIS provider, compliant with the NDIS Practice Standards for Community Nursing Care (0114) and High Intensity Daily Personal Activities (0104)."
						/>
						<Area
							title="We work with your whole team"
							desc="We partner with your GPs, specialists, allied health therapists, SIL providers and support coordinators, so nothing falls between the gaps."
						/>
						<Area
							title="Flexible and accessible"
							desc="Available to Agency-Managed, Plan-Managed and Self-Managed participants across the Pilbara region."
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
						<Question q="Does your nurse do the care, or only train my support workers?">
							Both. Our Registered Nurse can carry out clinical care directly,
							such as catheter changes, wound care or tube feeding. She can also
							assess a task, write a plan and train your support workers to do
							it safely, then keep supervising them. Which one suits you depends
							on your needs, your plan and who is already supporting you.
						</Question>
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
							or send a referral. We reply within one business day.
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

function ServiceGroup({
	title,
	intro,
	items,
}: { title: string; intro: string; items: string[] }) {
	return (
		<div className="rounded-xl border border-coolGray-200 p-6 shadow-sm bg-white">
			<h3 className="text-lg font-semibold text-coolGray-900">{title}</h3>
			<p className="mt-2 text-coolGray-600">{intro}</p>
			<ul className="mt-4 space-y-2 text-coolGray-700">
				{items.map((item) => (
					<li key={item} className="flex gap-3">
						<DotIcon />
						<span>{item}</span>
					</li>
				))}
			</ul>
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
