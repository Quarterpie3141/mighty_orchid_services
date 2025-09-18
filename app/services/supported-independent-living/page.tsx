import type { Metadata } from "next";
import { Footer, Header } from "../../components";

export const metadata: Metadata = {
	title:
		"Supported Independent Living (SIL) Services | NDIS SIL Provider | MTOS",
	description:
		"Professional Supported Independent Living (SIL) services in Karratha and Pilbara. Registered NDIS provider offering 24/7 support, person-centered care, and community integration.",
	keywords:
		"supported independent living, SIL services, NDIS SIL provider, disability accommodation, independent living support, Karratha SIL",
};

export default function SILServices() {
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
								Supported Independent Living (SIL) Services
							</h1>
							<h2 className="mb-6 text-xl md:text-2xl leading-tight font-semibold text-mto-blue">
								Your Path to Independent Living with NDIS Support
							</h2>
							<div className="md:w-3/4">
								<p className="mb-6 text-lg md:text-xl text-coolGray-500 font-medium">
									Mighty Orchid Services provides comprehensive Supported
									Independent Living (SIL) services designed to help you live as
									independently as possible while receiving the support you
									need. Our SIL services are available 24/7 and are tailored to
									your individual goals and preferences.
								</p>

								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold text-mto-blue">
									What is Supported Independent Living (SIL)?
								</h3>
								<p className="mb-6 text-lg text-coolGray-500 font-medium">
									SIL is an NDIS support that provides assistance with daily
									tasks and activities to help you live independently in your
									own home or shared accommodation. Our trained support workers
									are available around the clock to provide assistance when you
									need it, while promoting your independence and personal
									choice.
								</p>

								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold text-mto-blue">
									Our SIL Services Include:
								</h3>
								<ul className="mb-6 text-lg text-coolGray-500 font-medium list-disc list-inside space-y-2">
									<li>Personal care and hygiene support</li>
									<li>Medication management and administration</li>
									<li>Meal preparation and nutrition support</li>
									<li>Household tasks and cleaning assistance</li>
									<li>Community access and social participation</li>
									<li>Transport and mobility support</li>
									<li>Emergency response and crisis support</li>
									<li>Life skills development and training</li>
								</ul>

								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold text-mto-blue">
									Benefits of Our SIL Services:
								</h3>
								<ul className="mb-6 text-lg text-coolGray-500 font-medium list-disc list-inside space-y-2">
									<li>Live in your own home or shared accommodation</li>
									<li>Maintain control over your daily decisions</li>
									<li>Develop independent living skills</li>
									<li>Build meaningful relationships and connections</li>
									<li>Access community activities and services</li>
									<li>Receive support that adapts to your changing needs</li>
								</ul>

								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold text-mto-blue">
									Who is Eligible for SIL?
								</h3>
								<p className="mb-6 text-lg text-coolGray-500 font-medium">
									SIL services are available to NDIS participants who have been
									assessed as requiring this level of support. Your NDIS plan
									will include SIL funding if you need assistance with daily
									living activities and would benefit from having support
									workers available on-site.
								</p>

								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold text-mto-blue">
									Our Approach to SIL
								</h3>
								<p className="mb-6 text-lg text-coolGray-500 font-medium">
									At MTOS, we believe in a person-centered approach to SIL. We
									work closely with you to understand your goals, preferences,
									and support needs. Our experienced team develops
									individualized support plans that promote independence while
									ensuring your safety and wellbeing.
								</p>

								<div className="mt-8">
									<a
										className="inline-block py-3 px-6 text-lg leading-6 text-white bg-mto-blue hover:bg-mto-orange font-semibold rounded-md transition duration-150"
										href="/#contact-form"
									>
										Learn More About SIL
									</a>
								</div>
							</div>
						</div>
						<div className="w-5/6 max-w-[50rem] md:min-w-[20rem] min-w-[10rem]">
							<img
								src="https://cdn.mtos.com.au/images/respite-houses/35-mujira-ramble-baynton/cover.jpeg"
								className="max-h-[600px] w-auto rounded-3xl m-8"
								alt="Supported Independent Living accommodation"
							/>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
