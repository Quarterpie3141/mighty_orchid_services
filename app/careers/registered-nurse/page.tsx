"use client";
import { Footer, Header } from "@/app/components";
import Image from "next/image";

export default function _CareersPage_() {
	return (
		<>
			<Header />
			{/* Hero Section */}
			<section
				className="py-24 bg-fixed bg-center bg-no-repeat bg-cover"
				style={{
					backgroundImage: 'url("/bg-gradient.png")',
				}}
			>
				<div className="container mx-auto text-center mt-24">
					<h1 className="text-6xl font-bold text-mto-blue mb-4">
						Join Our Team
					</h1>
					<p className="text-2xl text-mto-blue">
						Build a meaningful career making a positive impact.
					</p>
				</div>
			</section>

			{/* Main Content */}
			<section className="py-12 bg-gray-50">
				<div className="container mx-auto px-4 md:px-8">
					<div className="md:flex md:space-x-8">
						{/* Image Column */}
						<div className="md:w-2/6 mb-8 md:mb-0">
							<Image
								src="http://mtos.com.au/stock/bruno-rodrigues-279xIHymPYY-unsplash.jpg"
								alt="Registered Nurse in Action"
								width={640}
								height={960}
								className="rounded shadow-lg w-full object-cover"
							/>
						</div>

						{/* Job Details Column */}
						<div className="md:w-4/6">
							<div className="bg-white bg-opacity-80 backdrop-blur rounded-lg shadow-md p-8">
								<div className="flex items-center md:justify-between flex-wrap mb-4">
									<h2 className="text-3xl text-mto-blue font-bold">
										We’re Hiring: Registered Nurse
									</h2>

									<div>
										<p className="text-sm text-mto-slategray mb-1 ml-1">
											Published on: March 18, 2025
										</p>
									</div>
								</div>

								{/* Summary */}
								<h3 className="text-2xl text-mto-blue underline decoration-mto-orange font-semibold mb-2">
									Summary
								</h3>
								<p className="text-lg mb-6">
									As a Registered Nurse in the disability and aged care sector,
									the role involves delivering high-quality, person-centered
									clinical care to elderly individuals and people living with
									disabilities.
									<br />
									<br />
									Core responsibilities include assessing patients' health
									conditions, developing and implementing individualized care
									plans, administering medications, and providing wound care,
									pain management, and palliative support as needed.
									<br />
									<br />
									The nurse also plays a key role in monitoring changes in
									clients’ physical or mental health, promptly responding to
									emergencies, and collaborating with multidisciplinary teams,
									families, and support workers to ensure continuity of care.
									<br />
									<br />
									Promoting dignity, independence, and emotional well-being is
									central to this role, along with maintaining accurate clinical
									records and complying with relevant aged care standards,
									disability care guidelines, and health regulations.
								</p>

								{/* Responsibilities */}
								<h3 className="text-2xl text-mto-blue underline decoration-mto-orange font-semibold mb-2">
									Responsibilities
								</h3>
								<ul className="list-disc space-y-1 mb-6 ml-4">
									<li>
										Administer medications and treatments as prescribed by
										physicians.
									</li>
									<li>
										Monitor and record patient vital signs and medical history.
									</li>
									<li>
										Collaborate with healthcare professionals to develop and
										implement participant care plans.
									</li>
									<li>
										Educate participants and their families on healthcare
										procedures and treatments.
									</li>
									<li>
										Maintain accurate and up-to-date participants records.
									</li>
									<li>
										Respond to participant emergencies and provide immediate
										care as needed.
									</li>
									<li>Adhere to all healthcare regulations and standards.</li>
									<li>
										Provide wound care, catheter care, and management of chronic
										conditions (e.g., diabetes, dementia).
									</li>
									<li>
										Support independence and mobility, including use of aids or
										techniques (e.g., manual handling, physiotherapy exercises).
									</li>
									<li>Provide grief and palliative support when needed.</li>
									<li>
										Participate in audits, accreditation, and continuous
										improvement processes.
									</li>
									<li>
										Supervise and support care workers, enrolled nurses, and
										personal care assistants.
									</li>
									<li>
										Facilitate activities that promote cognitive and emotional
										well-being.
									</li>
								</ul>

								{/* Qualifications */}
								<h3 className="text-2xl text-mto-blue underline decoration-mto-orange font-semibold mb-2">
									Qualifications
								</h3>
								<ul className="list-disc space-y-1 mb-6 ml-4">
									<li>Bachelor’s degree in Nursing or related field.</li>
									<li>Active Registered Nurse license (AHPRA).</li>
									<li>
										Minimum of 1 year of experience in a clinical setting.
									</li>
									<li>Strong communication and interpersonal skills.</li>
									<li>Ability to work in a fast-paced environment.</li>
									<li>Knowledge of healthcare regulations and standards.</li>
									<li>Understanding of NDIS (Desired but not essential).</li>
								</ul>

								{/* What we Offer */}
								<h3 className="text-2xl text-mto-blue underline decoration-mto-orange font-semibold mb-2">
									What we Offer
								</h3>
								<ul className="list-disc space-y-1 ml-4">
									<li>Competitive salary packaging and EAP services.</li>
									<li>
										Additional 1 week Northwest Leave (Pilbara Leave) upon
										completion of one year.
									</li>
									<li>
										Assistance in applying for subsidized housing schemes.
									</li>
									<li>Work-Life balanced work culture.</li>
									<li>
										Company uniforms for delivering exceptional service with
										professionalism.
									</li>
								</ul>

								{/* Employment */}
								<h3 className="text-2xl text-mto-blue underline decoration-mto-orange font-semibold mb-2">
									Employment
								</h3>
								<ul className="list-disc space-y-1 ml-4">
									<li>
										<strong>Employment:</strong> Full-Time
									</li>
									<li>
										<strong>Location:</strong> Karratha &amp; Hedland
									</li>
									<li>
										<strong>Pay:</strong> $95,000 to $100,000 Per Annum
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Application Section */}
			<section className="bg-white py-8">
				<div className="container mx-auto px-4 md:px-8">
					<div className="bg-[rgba(255,255,255,0.6)] py-6 px-8 shadow-md rounded-lg">
						<h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
						<p className="text-lg mb-4">
							If you believe you’re the right fit and ready to make a difference
							in patient care, please send your resume and cover letter to{" "}
							<a
								href="mailto:info@mtos.com.au"
								className="text-mto-orange hover:text-mto-blue transition"
							>
								info@mtos.com.au
							</a>
							. We look forward to hearing from you!
						</p>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
