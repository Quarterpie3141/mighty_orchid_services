"use client";
import { useEffect, useState } from "react";
import { Header } from "../components";

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
										src="../service-svg/briefcase-outline.svg"
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
						<div className="w-full md:w-1/2 lg:w-1/3 px-4 hidden">
							<div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
								<div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-mto-blue rounded-lg">
									<img
										width={35}
										height={35}
										src="/icons/job2.svg"
										alt="Job 2"
									/>
								</div>
								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
									Job Title 2
								</h3>
								<p className="text-coolGray-500 font-medium">
									Brief description of Job Title 2. Highlight key
									responsibilities and requirements.
								</p>
								<a
									className="inline-block py-2 px-4 mt-4 text-sm leading-5 text-white bg-mto-blue hover:bg-mto-orange font-medium rounded-md transition duration-150"
									href="/careers/job2"
								>
									Learn More
								</a>
							</div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/3 px-4 hidden">
							<div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
								<div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-mto-blue rounded-lg">
									<img
										width={35}
										height={35}
										src="/icons/job3.svg"
										alt="Job 3"
									/>
								</div>
								<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
									Job Title 3
								</h3>
								<p className="text-coolGray-500 font-medium">
									Brief description of Job Title 3. Highlight key
									responsibilities and requirements.
								</p>
								<a
									className="inline-block py-2 px-4 mt-4 text-sm leading-5 text-white bg-mto-blue hover:bg-mto-orange font-medium rounded-md transition duration-150"
									href="/careers/job3"
								>
									Learn More
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Footer */}
			<section
				className="bg-white pt-40"
				style={{
					backgroundImage: 'url("../svg/pattern-white.svg")',
					backgroundPosition: "center",
				}}
			>
				<div className="container px-4 mx-auto">
					<div className="pt-24 pb-0 mx-auto max-w-4xl">
						<a className="block md:mx-auto mb-5 max-w-max" href="/#">
							<div className=" pb-11">
								<img
									src="https://i.imgur.com/Cmary4A.png"
									className=" rounded-lg md:h-24 h-12"
									alt="logo"
								/>
							</div>
						</a>
						<div className="flex flex-wrap justify-center -mx-3 lg:-mx-6">
							<div className="w-full md:w-auto p-3 md:px-6">
								<a
									className="inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium"
									href="/#services"
								>
									Our Services
								</a>
							</div>
							<div className="w-full md:w-auto p-3 md:px-6">
								<a
									className="inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium"
									href="/#values"
								>
									About us
								</a>
							</div>
							<div className="w-full md:w-auto p-3 md:px-6">
								<a
									className="inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium"
									href="/#"
								>
									Events
								</a>
							</div>
							<div className="w-full md:w-auto p-3 md:px-6">
								<a
									className="inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium"
									href="/careers#"
								>
									Careers
								</a>
							</div>
							<div className="w-full md:w-auto p-3 md:px-6">
								<a
									className="inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium"
									href="/#FAQ"
								>
									FAQ
								</a>
							</div>
							<div className="w-full md:w-auto p-3 md:px-6">
								<a
									className="inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium"
									href="/#contact-form"
								>
									Contact Us
								</a>
							</div>
							<div className="w-full md:w-auto p-3 md:px-6">
								<a
									className="inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium"
									href="/#"
								>
									Home
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="border-b border-coolGray-100" />
				<div className="container px-4 mx-auto">
					<p className="py-10 md:pb-10 text-lg md:text-xl text-coolGray-400 font-medium text-center">
						Mighty Orchid Services Pty Ltd.
					</p>
				</div>
				<div className="container px-4 mx-auto">
					<p className=" text-lg md:text-xl text-coolGray-400 font-medium text-center">
						A proud member of:
					</p>
				</div>
				<div className=" flex justify-center px-4 mx-auto">
					<a href="https://kdcci.com.au/">
						<img
							className="w-72 p-5 mr-40 "
							src="other-assets/KDCCI.jpg"
							alt="KDDCI"
						/>
					</a>
					<a href="https://www.onslowcci.com.au/">
						<img
							className=" w-72 p-5 mt-10"
							src="other-assets/OCCI.svg"
							alt="OCCI"
						/>
					</a>
				</div>
			</section>
		</>
	);
}
