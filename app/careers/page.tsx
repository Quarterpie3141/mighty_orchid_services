"use client";
import { useEffect, useState } from "react";
import { Footer, Header } from "../components";

export default function Careers() {
	return (
		<>
			{/* Header */}
			<Header />
			{/* Careers */}
			<section
				className=" py-52 md:py-58 bg-white"
				style={{
					backgroundImage: 'url("../bg-gradient.png")',
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
				id="careers"
			>
				<div className="container mx-auto m-12">
					<div className="md:max-w-4xl mb-12 mx-auto text-center">
						<span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-orange font-medium uppercase rounded-full shadow-sm">
							Careers
						</span>
						<h1 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
							Join Our Team
						</h1>
						<p className="text-lg md:text-xl text-coolGray-500 font-medium">
							We are always looking for passionate and dedicated individuals to
							join our team. Explore our current job openings and apply today to
							make a difference in our community.
						</p>
					</div>
					<div className="flex flex-wrap -mx-4 justify-center">
						<div className="w-full md:w-1/2 lg:w-1/3 px-4">
							<div className="h-full p-8 text-center hover:bg-[rgba(255,255,255,0.5)] rounded-xl hover:shadow-xl transition duration-200">
								<div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-mto-blue rounded-lg">
									<img
										width={35}
										height={35}
										src="https://mtos.com.au/service-svg/briefcase-outline.svg"
										alt="Job 1"
									/>
								</div>
								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
									Disability Support Worker
								</h3>
								<p className="text-coolGray-500 font-medium">
									{`At Mighty Orchid Services, we are dedicated to enhancing the lives of individuals living with disabilities. We're seeking compassionate, dedicated, and skilled Disability Support Workers to join our team. This role involves providing direct care and support, promoting independence, and improving the quality of life for our clients.`}
								</p>
								<a
									className="inline-block py-2 px-4 mt-4 text-sm leading-5 text-white bg-mto-blue hover:bg-mto-orange font-medium rounded-md transition duration-150"
									href="/careers/disability_support_worker"
								>
									Learn More
								</a>
							</div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/3 px-4">
							<div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
								<div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-mto-blue rounded-lg">
									<img
										width={35}
										height={35}
										src="https://mtos.com.au/service-svg/care-treatment-heart-svgrepo-com.svg"
										alt="Job 2"
									/>
								</div>
								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
									Registered Nurse
								</h3>
								<p className="text-coolGray-500 font-medium">
									{`At Mighty Orchid Services, we are committed to providing exceptional medical services to individuals in our community. We're seeking compassionate, dedicated, and skilled Registered Nurses to become an integral part of our team. This role involves delivering high-quality patient care, promoting health and wellness, and making a positive impact on the lives of our patients.`}
								</p>
								<a
									className="inline-block py-2 px-4 mt-4 text-sm leading-5 text-white bg-mto-blue hover:bg-mto-orange font-medium rounded-md transition duration-150"
									href="/careers/registered-nurse"
								>
									Learn More
								</a>
							</div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/3 px-4">
							<div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
								<div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-mto-blue rounded-lg">
									<img
										width={35}
										height={35}
										src="https://mtos.com.au/service-svg/laptop-svgrepo-com.svg"
										alt="Job 3"
									/>
								</div>
								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
									Disability Service Officer
								</h3>
								<p className="text-coolGray-500 font-medium">
									A Disability Service Officer plays a pivotal role in
									coordinating and delivering compassionate care, assistance,
									and support to individuals living with disabilities
								</p>
								<a
									className="inline-block py-2 px-4 mt-4 text-sm leading-5 text-white bg-mto-blue hover:bg-mto-orange font-medium rounded-md transition duration-150"
									href="/careers/disability_service_officer"
								>
									Learn More
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Footer */}
			<Footer />
		</>
	);
}
