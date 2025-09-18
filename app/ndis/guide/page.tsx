import type { Metadata } from "next";
import { Footer, Header } from "../../components";

export const metadata: Metadata = {
	title: "NDIS Services Guide | How to Access NDIS Support | MTOS",
	description:
		"Complete guide to NDIS services and support. Learn about eligibility, funding, service types, and how to get started with your NDIS journey. Professional NDIS provider in Karratha.",
	keywords:
		"NDIS services, NDIS eligibility, NDIS funding, disability support plan, NDIS provider Karratha, NDIS application process, NDIS support coordination",
};

export default function NDISGuide() {
	return (
		<>
			<Header />
			<section
				className="pt-[7rem]"
				style={{
					backgroundImage: 'url("https://i.imgur.com/vs6w1Nn.png")',
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			>
				<div className="pt-24 content-between w-5/6 m-auto">
					<div className="flex m-auto w-fit md:flex-row flex-col">
						<div className="p-16 max-w-4xl">
							<h1 className="mb-4 text-3xl md:text-4xl leading-tight font-bold text-mto-blue">
								Your Complete Guide to NDIS Services
							</h1>
							<h2 className="mb-6 text-xl md:text-2xl leading-tight font-semibold text-mto-blue">
								Understanding NDIS Funding and Support Options
							</h2>
							<div className="md:w-3/4">
								<p className="mb-6 text-lg md:text-xl text-coolGray-500 font-medium">
									The National Disability Insurance Scheme (NDIS) provides
									funding and support for Australians with permanent and
									significant disabilities. As a registered NDIS provider,
									Mighty Orchid Services is here to help you navigate your NDIS
									journey and access the supports you need.
								</p>

								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold text-mto-blue">
									Am I Eligible for NDIS?
								</h3>
								<p className="mb-4 text-lg text-coolGray-500 font-medium">
									To be eligible for NDIS support, you must meet the following
									criteria:
								</p>
								<ul className="mb-6 text-lg text-coolGray-500 font-medium list-disc list-inside space-y-2">
									<li>Be under 65 years old when you first apply</li>
									<li>
										Live in Australia and be an Australian citizen, permanent
										resident, or hold a Protected Special Category Visa
									</li>
									<li>
										Have a permanent disability that significantly affects your
										ability to take part in everyday activities
									</li>
									<li>
										Need support from other people or equipment to do things
										because of your disability
									</li>
								</ul>

								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold text-mto-blue">
									NDIS Service Categories We Provide:
								</h3>
								<div className="mb-6">
									<h4 className="mb-2 text-lg font-semibold text-mto-blue">
										Core Supports:
									</h4>
									<ul className="mb-4 text-lg text-coolGray-500 font-medium list-disc list-inside space-y-1">
										<li>Assistance with daily living</li>
										<li>Community access and participation</li>
										<li>Respite and emergency support</li>
									</ul>

									<h4 className="mb-2 text-lg font-semibold text-mto-blue">
										Capacity Building Supports:
									</h4>
									<ul className="mb-4 text-lg text-coolGray-500 font-medium list-disc list-inside space-y-1">
										<li>Support coordination</li>
										<li>Life skills development</li>
										<li>Employment support</li>
									</ul>

									<h4 className="mb-2 text-lg font-semibold text-mto-blue">
										Capital Supports:
									</h4>
									<ul className="mb-4 text-lg text-coolGray-500 font-medium list-disc list-inside space-y-1">
										<li>Supported Independent Living (SIL)</li>
										<li>Specialist disability accommodation</li>
									</ul>
								</div>

								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold text-mto-blue">
									How to Get Started with NDIS:
								</h3>
								<ol className="mb-6 text-lg text-coolGray-500 font-medium list-decimal list-inside space-y-2">
									<li>Contact the NDIS to request an access application</li>
									<li>
										Complete and submit your application with supporting
										evidence
									</li>
									<li>
										Attend a planning meeting to discuss your goals and support
										needs
									</li>
									<li>Receive your NDIS plan with approved funding</li>
									<li>
										Choose your service providers and start using your supports
									</li>
								</ol>

								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold text-mto-blue">
									Why Choose MTOS as Your NDIS Provider?
								</h3>
								<ul className="mb-6 text-lg text-coolGray-500 font-medium list-disc list-inside space-y-2">
									<li>Registered and experienced NDIS provider</li>
									<li>Local knowledge of Karratha and Pilbara region</li>
									<li>Person-centered approach to support</li>
									<li>Flexible service delivery options</li>
									<li>Qualified and trained support staff</li>
									<li>Comprehensive range of NDIS services</li>
								</ul>

								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold text-mto-blue">
									Need Help with Your NDIS Journey?
								</h3>
								<p className="mb-6 text-lg text-coolGray-500 font-medium">
									Navigating the NDIS can feel overwhelming, but you don't have
									to do it alone. Our experienced team can help you understand
									your options, connect with the right supports, and make the
									most of your NDIS funding. Contact us today for a free
									consultation.
								</p>

								<div className="mt-8">
									<a
										className="inline-block py-3 px-6 text-lg leading-6 text-white bg-mto-blue hover:bg-mto-orange font-semibold rounded-md transition duration-150 mr-4"
										href="/#contact-form"
									>
										Get NDIS Support
									</a>
									<a
										className="inline-block py-3 px-6 text-lg leading-6 text-white bg-mto-orange hover:bg-mto-blue font-semibold rounded-md transition duration-150"
										href="/referrals"
									>
										Make a Referral
									</a>
								</div>
							</div>
						</div>
						<div className="w-5/6 max-w-[50rem] md:min-w-[20rem] min-w-[10rem]">
							<img
								src="https://cdn.mtos.com.au/images/respite-houses/39B-delambre-drive-nickol/cover.jpeg"
								className="max-h-[600px] w-auto rounded-3xl m-8"
								alt="NDIS support services"
							/>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
