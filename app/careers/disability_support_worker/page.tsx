"use client";
import { Footer, Header } from "@/app/components";
import Image from "next/image";

export default function CareersPage() {
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
								src="https://mtos.com.au/stock/ortopediatri-cocuk-ortopedi-akademisi-alCU30xHRnA-unsplash.jpg"
								alt="Support Worker in Action"
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
										We’re Hiring: Support Worker
									</h2>

									<p className="text-sm text-mto-slategray ml-1">
										Updated on: Jan 6, 2025
									</p>
								</div>
								<p className="text-lg mb-4">
									As a Support Worker at Mighty Orchid Services, you will
									provide assistance to individuals with disabilities—helping
									them achieve their personal goals and maintain their
									independence. You’ll join a dedicated team committed to
									delivering high-quality care.
								</p>

								<h3 className="text-2xl text-mto-blue underline decoration-mto-orange font-semibold mb-2">
									Key Responsibilities:
								</h3>
								<ul className="list-disc mb-6 space-y-1 ml-4">
									<li>
										Assist participants with daily living activities such as
										bathing, dressing, and grooming (Personal Care)
									</li>
									<li>
										Provide emotional support and companionship to clients
									</li>
									<li>
										Help participants with mobility and transportation needs
										(Community access)
									</li>
									<li>Administer medication and monitor health conditions</li>
									<li>
										Assist with meal preparation and household tasks (Domestic
										Assistance)
									</li>
									<li>
										Collaborate with healthcare professionals and family members
										to ensure the best possible care for participants
									</li>
									<li>Maintain accurate records and documentation</li>
									<li>
										Support Participants in the use of aid and personal
										equipment including standing and walking frames/hoists,
										wheelchair (manual or electric)
									</li>
									<li>
										Assist the participants to attend social clubs, art
										workshops, parks, libraries, etc and help them in learning a
										new skill and to live a fulfilling life with choice and
										control.
									</li>
								</ul>

								<h3 className="text-2xl font-semibold text-mto-blue underline decoration-mto-orange mb-2">
									Required Skills &amp; Qualifications
								</h3>
								<ul className="list-disc space-y-1 mb-6 ml-4">
									<li>
										Certification in disability support or related field
										preferred
									</li>
									<li>Experience working with individuals with disabilities</li>
									<li>Strong communication and interpersonal skills.</li>
									<li>Ability to work independently and as part of a team</li>
									<li>Compassionate and patient demeanor</li>
									<li>
										Ability to handle challenging behaviors and situations
									</li>
									<li>
										Ability to work both independently and in a team setting.
									</li>
									<li>Knowledge of disability rights and advocacy</li>
									<li>
										Necessary certifications such as Working with Children Check
										(if applicable) and NDISWC
									</li>
								</ul>
								<h3 className="text-2xl font-semibold text-mto-blue underline decoration-mto-orange mb-2">
									What we offer:
								</h3>
								<ul className="list-disc space-y-1 ml-4 mb-6">
									<li>Competitive salary packaging as per SCHADS Awards</li>
									<li>
										Additional 1 week Northwest Leave (Pilbara Leave) upon
										completion of one year
									</li>
									<li>EAP services</li>
									<li>Assistance in applying for subsidized housing schemes</li>
									<li>Compassionate and patient demeanor</li>
									<li>Work-Life balanced work culture</li>
								</ul>
								{/* Employment */}
								<h3 className="text-2xl text-mto-blue underline decoration-mto-orange font-semibold mb-2">
									Employment
								</h3>
								<ul className="list-disc space-y-1 ml-4">
									<li>
										<strong>Employment:</strong> Permanent Full-Time &amp;
										Part-Time
									</li>
									<li>
										<strong>Location:</strong> Karratha &amp; Hedland
									</li>
									<li>
										<strong>Pay:</strong> $70,000.00 - $90,000.00 Per Annum
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
							Interested candidates are encouraged to send their details and
							resume to{" "}
							<a
								href="mailto:info@mtos.com.au"
								className="text-mto-orange hover:text-mto-blue transition"
							>
								info@mtos.com.au
							</a>{" "}
							or apply though our job listings on{" "}
							<a
								href="https://au.indeed.com/job/disability-support-worker-38e70719818ed192"
								className="text-mto-orange hover:text-mto-blue transition"
							>
								Indeed
							</a>{" "}
							or Jora. We look forward to hearing from you!
						</p>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
