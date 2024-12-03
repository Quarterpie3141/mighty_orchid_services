export default function FAQ() {
	return (
		<section
			className="pt-24 bg-white"
			style={{
				backgroundImage: 'url("svg/pattern-white.svg")',
				backgroundPosition: "center",
			}}
			id="FAQ"
		>
			<div className="container px-4 mx-auto">
				<div className="max-w-4xl mb-16">
					<span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-orange font-medium rounded-full shadow-sm">
						FAQ
					</span>
					<h2 className="mb-4 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter">
						Frequently Asked Questions
					</h2>
					<p className="text-lg md:text-xl text-coolGray-500 font-medium">
						Additional information can be found on the{" "}
						<a
							href="https://www.ndis.gov.au/"
							className=" underline text-mto-blue"
						>
							NDIS website
						</a>
					</p>
				</div>
				<div className="flex flex-wrap pb-16 -mx-4">
					<div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
						<div className="md:max-w-xs">
							<h3 className="mb-6 text-xl text-coolGray-900 font-bold">
								How to access NDIS funds?
							</h3>
							<p className="text-coolGray-500 font-medium">
								To access NDIS funds, first confirm your eligibility based on
								age, residency, and disability criteria through the NDIS website
								or an NDIS representative. Then, complete an Access Request
								Form, develop your NDIS plan with an NDIS planner or Local Area
								Coordinator, and choose how to manage your funds (NDIA-managed,
								plan-managed, or self-managed). Finally, select service
								providers and use the funds as outlined in your plan. For any
								assistance, contact the NDIS or a local NDIS provider.
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
						<div className="md:max-w-xs">
							<h3 className="mb-6 text-xl text-coolGray-900 font-bold">
								How to access NDIS services?
							</h3>
							<p className="text-coolGray-500 font-medium">
								To access NDIS services, start by confirming your eligibility
								and then become an NDIS participant by submitting an Access
								Request Form with necessary documentation. Once approved, work
								with an NDIS planner to create a plan that includes the services
								you need. Choose service providers that align with your plan and
								coordinate with them to receive your services. For guidance,
								reach out to the NDIS or consult with an NDIS knowledgeable
								professional.
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
						<div className="md:max-w-xs">
							<h3 className="mb-6 text-xl text-coolGray-900 font-bold">
								Am I eligible?
							</h3>
							<p className="text-coolGray-500 font-medium">
								Eligibility for NDIS depends on age (under 65 years), residency
								status (Australian citizen, permanent resident, or Protected
								Special Category Visa holder), and the nature of your disability
								(permanent and significant impact on your daily life). Visit the{" "}
								<a
									href="https://www.ndis.gov.au/"
									className=" underline text-mto-blue"
								>
									NDIS website
								</a>{" "}
								or contact an NDIS representative for a detailed assessment of
								your eligibility.
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8 xl:mb-0">
						<div className="md:max-w-xs">
							<h3 className="mb-6 text-xl text-coolGray-900 font-bold">
								How do I apply?
							</h3>
							<p className="text-coolGray-500 font-medium">
								To apply for NDIS, start by filling out an Access Request Form
								(ARF), available on the{" "}
								<a
									href="https://www.ndis.gov.au/"
									className=" underline text-mto-blue"
								>
									NDIS website
								</a>{" "}
								or through an NDIS office. Provide detailed information about
								your disability and how it affects your daily activities, along
								with supporting documentation from healthcare professionals.
								Submit the completed form to the NDIS for review.
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8 md:mb-0">
						<div className="md:max-w-xs">
							<h3 className="mb-6 text-xl text-coolGray-900 font-bold">
								How is My NDIS Plan Reviewed and Updated?
							</h3>
							<p className="text-coolGray-500 font-medium">
								Your NDIS plan is typically reviewed annually by the NDIA.
								During the review, you can discuss your current supports, the
								progress towards your goals, and any changes in your needs.
								Based on this, your plan can be adjusted and updated to ensure
								it continues to meet your requirements effectively. You can also
								request a review at any time if there are significant changes in
								your circumstances.
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/2 xl:w-1/3 px-4">
						<div className="md:max-w-xs">
							<h3 className="mb-6 text-xl text-coolGray-900 font-bold">
								Can I Change My NDIS Service Providers?
							</h3>
							<p className="text-coolGray-500 font-medium">
								{
									"Yes, as an NDIS participant, you have the flexibility to change your service providers if you're not satisfied with the current services or find someone better suited to your needs. This is part of the NDIS's emphasis on participant choice and control. Inform your current provider and the NDIA about the change, especially if it affects your plan's budget or service agreements."
								}
							</p>
						</div>
					</div>
				</div>
				<div className="relative -mb-40 py-16 px-4 md:px-8 lg:px-16 bg-mto-blue rounded-md overflow-hidden">
					<img
						className="absolute top-0 left-0 h-full w-full object-cover"
						src="flex-ui-assets/elements/pattern-dark.svg"
						alt=""
					/>
					<div className="relative max-w-max mx-auto text-center">
						<h3 className="mb-2 text-2xl md:text-5xl leading-tight font-bold text-white tracking-tighter">
							Have any additional questions?
						</h3>
						<p className="mb-6 text-base md:text-xl text-coolGray-400">
							Feel free to send us an email, and we will respond to you with
							personalised information for you.
						</p>
						<a
							className="inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto mb-2 md:mb-0 md:mr-4 text-lg leading-7 text-green-50 bg-mto-orange hover:bg-white hover:text-gray-950 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm transition duration-150"
							href="#contact-form"
						>
							Get in touch
						</a>
					</div>
				</div>
			</div>
			<div className="h-64 bg-mto-orange" />
		</section>
	);
}
