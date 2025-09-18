import type { Metadata } from "next";
import { Footer, Header } from "../../components";

export const metadata: Metadata = {
	title: "Respite Care Services | NDIS Respite Provider | MTOS Karratha",
	description:
		"Professional respite care services in Karratha and Pilbara. Quality short-term accommodation and support for NDIS participants. Give families a break with trusted respite care.",
	keywords:
		"respite care services, NDIS respite provider, disability respite accommodation, short term accommodation, family respite support, Karratha respite care",
};

export default function RespiteCareServices() {
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
								Professional Respite Care Services
							</h1>
							<h2 className="mb-6 text-xl md:text-2xl leading-tight font-semibold text-mto-blue">
								Quality Short-Term Accommodation and Support
							</h2>
							<div className="md:w-3/4">
								<p className="mb-6 text-lg md:text-xl text-coolGray-500 font-medium">
									Mighty Orchid Services provides high-quality respite care
									services designed to give families and carers a much-needed
									break while ensuring participants receive excellent care in a
									safe, comfortable environment. Our purpose-built respite
									houses offer a home-away-from-home experience.
								</p>

								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold text-mto-blue">
									What is Respite Care?
								</h3>
								<p className="mb-6 text-lg text-coolGray-500 font-medium">
									Respite care provides temporary relief for primary carers by
									offering short-term accommodation and support for people with
									disabilities. This service allows carers to take a break,
									attend to personal matters, or simply recharge while knowing
									their loved one is receiving quality care.
								</p>

								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold text-mto-blue">
									Our Respite Care Facilities:
								</h3>
								<ul className="mb-6 text-lg text-coolGray-500 font-medium list-disc list-inside space-y-2">
									<li>
										10 Grant Street, Bulgarra - Fully accessible accommodation
									</li>
									<li>
										35 Mujira Ramble, Baynton - Modern, comfortable facilities
									</li>
									<li>
										39B Delambre Drive, Nickol - Purpose-designed respite house
									</li>
									<li>7A Jennifer Court, Pegscreek - Home-like environment</li>
									<li>
										39E Delambre Drive, Nickol - Additional accessible
										accommodation
									</li>
								</ul>

								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold text-mto-blue">
									Our Respite Services Include:
								</h3>
								<ul className="mb-6 text-lg text-coolGray-500 font-medium list-disc list-inside space-y-2">
									<li>24/7 professional support and supervision</li>
									<li>Personal care and hygiene assistance</li>
									<li>Medication management and administration</li>
									<li>Nutritious meal preparation and dietary support</li>
									<li>Community access and recreational activities</li>
									<li>Social interaction and engagement programs</li>
									<li>Emergency support and crisis response</li>
									<li>Flexible short-term and planned respite options</li>
								</ul>

								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold text-mto-blue">
									Benefits of Our Respite Care:
								</h3>
								<ul className="mb-6 text-lg text-coolGray-500 font-medium list-disc list-inside space-y-2">
									<li>Gives families and carers essential breaks</li>
									<li>
										Provides participants with new experiences and social
										opportunities
									</li>
									<li>Maintains routine and familiar care practices</li>
									<li>Offers emergency respite when needed</li>
									<li>Supports family relationships and wellbeing</li>
									<li>Provides peace of mind with professional care</li>
								</ul>

								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold text-mto-blue">
									Booking Respite Care
								</h3>
								<p className="mb-6 text-lg text-coolGray-500 font-medium">
									Our respite care services are available for planned stays or
									emergency situations. We work with your NDIS plan to ensure
									funding is in place and can accommodate both short-term and
									regular respite needs. Contact us to discuss availability and
									booking arrangements.
								</p>

								<div className="mt-8">
									<a
										className="inline-block py-3 px-6 text-lg leading-6 text-white bg-mto-blue hover:bg-mto-orange font-semibold rounded-md transition duration-150 mr-4"
										href="/respite"
									>
										View Our Houses
									</a>
									<a
										className="inline-block py-3 px-6 text-lg leading-6 text-white bg-mto-orange hover:bg-mto-blue font-semibold rounded-md transition duration-150"
										href="/#contact-form"
									>
										Book Respite Care
									</a>
								</div>
							</div>
						</div>
						<div className="w-5/6 max-w-[50rem] md:min-w-[20rem] min-w-[10rem]">
							<img
								src="https://cdn.mtos.com.au/images/respite-houses/10-grant-street-bulgarra/cover.jpeg"
								className="max-h-[600px] w-auto rounded-3xl m-8"
								alt="MTOS respite care accommodation"
							/>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
