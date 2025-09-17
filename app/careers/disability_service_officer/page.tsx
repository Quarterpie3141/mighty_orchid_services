"use client";
import { Footer, Header } from "@/app/components";
import Image from "next/image";

export default function _CareersPage_() {
	return (
		<>
			<Header />
			{/* Hero Section */}
			<section
				className="md:py-24 py-16 bg-fixed bg-center bg-no-repeat bg-cover"
				style={{
					backgroundImage: 'url("/bg-gradient.png")',
				}}
			>
				<div className="container mx-auto text-center mt-24 md:p-0 px-5">
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
								src="https://mtos.com.au/stock/linkedin-sales-solutions-QgYvORVDdd8-unsplash.jpg"
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
										We’re Hiring: Disability Service Officer
									</h2>

									<p className="text-sm text-mto-slategray mb-4 ml-1">
										Published on: April 14th, 2025
									</p>
								</div>
								{/* Summary */}
								<h3 className="text-2xl text-mto-blue underline decoration-mto-orange font-semibold mb-2">
									Summary
								</h3>
								<p className="text-lg mb-6">
									As a Disability Service Officer at Mighty Orchid Services, you
									will play a pivotal role in coordinating and delivering
									compassionate care, assistance, and support to individuals
									living with disabilities. Your objective will be to empower
									people by fostering greater independence, enhancing their
									overall quality of life, and promoting active engagement
									within their communities.
								</p>

								{/* Responsibilities */}
								<h3 className="text-2xl text-mto-blue underline decoration-mto-orange font-semibold mb-2">
									Responsibilities
								</h3>
								<ul className="list-disc space-y-1 mb-6 ml-4">
									<li>
										Rostering Support workers to assist clients with various
										household tasks, such as meal preparation, cleaning, and
										laundry, to ensure a safe and comfortable living
										environment.
									</li>
									<li>
										Foster meaningful connections with support workers and
										clients through active listening, companionship, and
										empathy, promoting mental and emotional well-being.
									</li>
									<li>
										Maintain accurate records of Support Workers and Clients in
										database.
									</li>
									<li>
										Coordinate and maintain positive communication with Support
										Coordinators and relevant stakeholders.
									</li>
									<li>
										Conduct regular assessments of clients' needs and progress,
										maintaining accurate records and promptly reporting any
										changes or concerns to the appropriate supervisor.
									</li>
									<li>
										Encourage and support clients in developing and maintaining
										their independence and self-confidence by offering guidance
										and assistance as needed.
									</li>
									<li>
										Ensure the safety and well-being of clients at all times,
										following established safety protocols and infection control
										measures.
									</li>
									<li>
										Maintain participant health records and documentation
										according to Mighty Orchid Services Pty Ltd’s policies.
									</li>
									<li>
										Write participant reports and continuously update
										participant progress or change of circumstances through
										reports.
									</li>
									<li>
										Investigate incidents and report to the relevant authority
										as per NDIS standards.
									</li>
									<li>Participate in continuous improvement activities.</li>
								</ul>

								{/* Qualifications */}
								<h3 className="text-2xl text-mto-blue underline decoration-mto-orange font-semibold mb-2">
									Qualifications
								</h3>
								<ul className="list-disc space-y-1 mb-6 ml-4">
									<li>
										Diploma/Advanced Diploma/Associate Degree in Community
										Services Preferred or equivalent experience (3+ years).
									</li>
									<li>Passport and Driver’s License.</li>
									<li>Knowledge of disability rights and advocacy.</li>
									<li>
										Necessary certifications such as Working with Children Check
										and NDISWC (If Applicable).
									</li>
								</ul>
								{/* Qualifications */}
								<h3 className="text-2xl text-mto-blue underline decoration-mto-orange font-semibold mb-2">
									Knowledge and skills
								</h3>
								<ul className="list-disc space-y-1 mb-6 ml-4">
									<li>A compassionate and patient demeanour.</li>
									<li>
										Ability to handle challenging behaviours and situations.
									</li>
									<li>Strong interpersonal and communication skills.</li>
									<li>Ability to work independently and as part of a team.</li>
									<li>
										Physically able to carry out the duties required by the
										role.
									</li>
									<li>
										The ability to build and maintain rapport with stakeholders,
										support workers and participants.
									</li>
								</ul>
								{/* what we offer */}
								<h3 className="text-2xl text-mto-blue underline decoration-mto-orange font-semibold mb-2">
									What we Offer
								</h3>
								<ul className="list-disc space-y-1 ml-4">
									<li>Competitive salary packaging as per SCHADS Awards</li>
									<li>
										Additional 1 week Northwest Leave (Pilbara Leave) upon
										completion of one year
									</li>
									<li>EAP services</li>
									<li>Assistance in applying for subsidized housing schemes</li>
									<li>Work-Life balanced work culture</li>
									<li>
										Company uniforms for delivering exceptional service with
										professionalism
									</li>
								</ul>
								{/* Employment */}
								<h3 className="text-2xl text-mto-blue underline decoration-mto-orange font-semibold mb-2">
									Employment
								</h3>
								<ul className="list-disc space-y-1 ml-4">
									<li>
										<strong>Employment:</strong> Permanent Full-Time, Part-Time
										and Casual Contracts Available.
									</li>
									<li>
										<strong>Location:</strong> Karratha &amp; Hedland
									</li>
									<li>
										<strong>Pay:</strong> $75,000.00 - $85,000.00 Per Annum.
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
