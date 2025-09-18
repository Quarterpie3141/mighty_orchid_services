import type { Metadata } from "next";
import { Footer, Header } from "../components";

export const metadata: Metadata = {
	title: "Disability Support Services Karratha WA | NDIS Provider | MTOS",
	description:
		"Professional disability support services in Karratha, WA. Registered NDIS provider offering SIL, respite care, community access & daily life support. Local Pilbara team ready to help.",
	keywords:
		"disability support services Karratha, NDIS provider Karratha, Pilbara disability services, supported independent living Karratha, respite care Karratha",
};

export default function KarrathaSEO() {
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
								Disability Support Services in Karratha, WA
							</h1>
							<h2 className="mb-6 text-xl md:text-2xl leading-tight font-semibold text-mto-blue">
								Your Local NDIS Provider in Karratha
							</h2>
							<div className="md:w-3/4">
								<p className="mb-6 text-lg md:text-xl text-coolGray-500 font-medium">
									Mighty Orchid Services (MTOS) is proudly serving Karratha and
									the wider Pilbara region with comprehensive disability support
									services. As a registered NDIS provider, we're committed to
									helping individuals with disabilities build independence and
									connect with their community.
								</p>
								<p className="mb-6 text-lg md:text-xl text-coolGray-500 font-medium">
									Located in the heart of Karratha, we understand the unique
									challenges and opportunities of living with a disability in
									regional Western Australia. Our team of dedicated support
									workers provides personalized care that respects your goals,
									preferences, and lifestyle.
								</p>

								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold text-mto-blue">
									Our Karratha Services Include:
								</h3>
								<ul className="mb-6 text-lg text-coolGray-500 font-medium list-disc list-inside space-y-2">
									<li>Supported Independent Living (SIL)</li>
									<li>Respite Care Services</li>
									<li>Community Access and Participation</li>
									<li>Daily Life Support</li>
									<li>High-Intensity Care</li>
									<li>Employment Support</li>
								</ul>

								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold text-mto-blue">
									Why Choose MTOS in Karratha?
								</h3>
								<ul className="mb-6 text-lg text-coolGray-500 font-medium list-disc list-inside space-y-2">
									<li>Local knowledge and community connections</li>
									<li>Experienced, trained support workers</li>
									<li>Person-centered approach to care</li>
									<li>Flexible service delivery</li>
									<li>Strong relationships with local healthcare providers</li>
									<li>Understanding of Pilbara lifestyle and culture</li>
								</ul>

								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold text-mto-blue">
									Contact Our Karratha Team
								</h3>
								<p className="mb-6 text-lg text-coolGray-500 font-medium">
									Ready to learn more about our disability support services in
									Karratha? Our friendly team is here to discuss your needs and
									help you navigate your NDIS journey. Contact us today to
									arrange a consultation.
								</p>

								<div className="mt-8">
									<a
										className="inline-block py-3 px-6 text-lg leading-6 text-white bg-mto-blue hover:bg-mto-orange font-semibold rounded-md transition duration-150"
										href="/#contact-form"
									>
										Contact Us Today
									</a>
								</div>
							</div>
						</div>
						<div className="w-5/6 max-w-[50rem] md:min-w-[20rem] min-w-[10rem]">
							<img
								src="https://cdn.mtos.com.au/images/respite-houses/10-grant-street-bulgarra/IMG_32.jpeg"
								className="max-h-[600px] w-auto rounded-3xl m-8"
								alt="MTOS Karratha disability support services"
							/>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
