import type { Metadata } from "next";
import { Footer, Header } from "../../components";

export const metadata: Metadata = {
	title: "Disability Support Services Nickol WA | NDIS Provider | MTOS",
	description:
		"Professional disability support services in Nickol, WA. Registered NDIS provider with respite houses on Delambre Drive. Quality SIL, respite care and community support services.",
	keywords:
		"disability support services Nickol, NDIS provider Nickol, respite care Delambre Drive, supported independent living Nickol, Pilbara disability services",
};

export default function NickolSEO() {
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
								Disability Support Services in Nickol, WA
							</h1>
							<h2 className="mb-6 text-xl md:text-2xl leading-tight font-semibold text-mto-blue">
								Quality Respite Care and Support Services in Nickol
							</h2>
							<div className="md:w-3/4">
								<p className="mb-6 text-lg md:text-xl text-coolGray-500 font-medium">
									Mighty Orchid Services operates dedicated respite houses in
									Nickol, providing high-quality disability support services to
									the local community. Our purpose-built facilities on Delambre
									Drive offer comfortable, accessible accommodation for people
									with disabilities.
								</p>
								<p className="mb-6 text-lg md:text-xl text-coolGray-500 font-medium">
									Nickol is a vibrant suburb of Karratha, and our team
									understands the importance of maintaining strong community
									connections while providing professional disability support.
									Our services help individuals with disabilities live
									independently and participate fully in community life.
								</p>

								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold text-mto-blue">
									Our Nickol Facilities:
								</h3>
								<ul className="mb-6 text-lg text-coolGray-500 font-medium list-disc list-inside space-y-2">
									<li>
										<strong>39B Delambre Drive, Nickol</strong> - Modern respite
										accommodation with full accessibility features
									</li>
									<li>
										<strong>39E Delambre Drive, Nickol</strong> - Additional
										accessible respite house for short-term stays
									</li>
									<li>Purpose-designed for people with disabilities</li>
									<li>Fully accessible bathrooms and living areas</li>
									<li>24/7 professional support available</li>
									<li>Close to local amenities and services</li>
								</ul>

								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold text-mto-blue">
									Services Available in Nickol:
								</h3>
								<ul className="mb-6 text-lg text-coolGray-500 font-medium list-disc list-inside space-y-2">
									<li>Respite care and short-term accommodation</li>
									<li>Emergency respite support</li>
									<li>Personal care and daily living assistance</li>
									<li>Community access and participation</li>
									<li>Meal preparation and nutritional support</li>
									<li>Medication management</li>
									<li>Transport to local appointments and activities</li>
								</ul>

								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold text-mto-blue">
									Why Choose Our Nickol Services?
								</h3>
								<ul className="mb-6 text-lg text-coolGray-500 font-medium list-disc list-inside space-y-2">
									<li>Convenient location in established Nickol suburb</li>
									<li>
										Close to shopping centers, medical facilities, and
										recreation areas
									</li>
									<li>Experienced, trained support workers</li>
									<li>Flexible respite options to suit family needs</li>
									<li>Strong focus on participant choice and independence</li>
									<li>Regular community activities and outings</li>
								</ul>

								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold text-mto-blue">
									Getting Started with Our Nickol Services
								</h3>
								<p className="mb-6 text-lg text-coolGray-500 font-medium">
									Our Nickol respite houses are available for both planned and
									emergency bookings. We work with your NDIS plan to ensure all
									funding requirements are met. Contact our team to discuss
									availability, tour our facilities, or arrange a consultation.
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
										Contact Us
									</a>
								</div>
							</div>
						</div>
						<div className="w-5/6 max-w-[50rem] md:min-w-[20rem] min-w-[10rem]">
							<img
								src="https://cdn.mtos.com.au/images/respite-houses/39B-delambre-drive-nickol/cover.jpeg"
								className="max-h-[600px] w-auto rounded-3xl m-8"
								alt="MTOS Nickol respite accommodation on Delambre Drive"
							/>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
