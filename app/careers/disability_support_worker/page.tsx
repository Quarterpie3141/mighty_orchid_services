"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Careers() {
	//state
	const [navVis, setNavVis] = useState(true);
	//effect
	const handleScroll = () => {
		const position = window.scrollY;
		setNavVis(position > 0);
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});
	//const
	const variants = {
		expanded: {
			backdropFilter: "blur(0px)",
			backgroundColor: "rgba(24,43,85,0)",
			padding: "1.5rem",
		},
		compact: {
			backdropFilter: "blur(8px)",
			backgroundColor: "rgba(24,43,85,0.9)",
			padding: "0.5rem",
		},
	};
	const imageVariants = {
		compact: { height: "3.5rem" },
		expanded: { height: "7rem" },
	};

	return (
		<>
			{/* Header */}
			<section className=" bg-transparent fixed w-full top-0 z-50">
				<motion.nav
					animate={navVis ? "compact" : "expanded"}
					variants={variants}
					className="flex md:justify-between justify-center px-4"
				>
					<a href="/#">
						<motion.img
							variants={imageVariants}
							animate={navVis ? "compact" : "expanded"}
							className=" md:ml-[2vw] mx-auto md:h-24 h-12 rounded-xl"
							src="https://i.imgur.com/Cmary4A.png"
							alt=""
						/>
					</a>
					<div className="hidden xl:flex items-center md:mr-[10vw] sm:mr-auto">
						<ul className="flex mr-12">
							<li className="mr-12">
								<a
									className={`${navVis ? " text-white" : "text-coolGray-500"} hover:text-mto-orange font-medium`}
									href="/#services"
								>
									Our Services
								</a>
							</li>
							<li className="mr-12">
								<a
									className={`${navVis ? " text-white" : "text-coolGray-500"} hover:text-mto-orange font-medium`}
									href="/#values"
								>
									About us
								</a>
							</li>
							<li className="mr-12">
								<a
									className={`${navVis ? " text-white" : "text-coolGray-500"} hover:text-mto-orange font-medium`}
									href="/#"
								>
									Events
								</a>
							</li>
							<li className="mr-12">
								<a
									className={`${navVis ? " text-white" : "text-coolGray-500"} hover:text-mto-orange font-medium`}
									href="/careers#"
								>
									Careers
								</a>
							</li>
							<li>
								<a
									className={`${navVis ? " text-white" : "text-coolGray-500"} hover:text-mto-orange font-medium`}
									href="/#FAQ"
								>
									FAQ
								</a>
							</li>
						</ul>
						<a
							className="inline-block py-2 px-4 text-sm leading-5 text-white bg-mto-blue hover:bg-mto-orange font-medium focus:ring-2 focus:ring-coolGray-500 focus:ring-opacity-50 rounded-md transition duration-150"
							href="/#contact-form"
						>
							Contact Us
						</a>
					</div>
				</motion.nav>
			</section>
			{/* Careers */}
			<section
				className=" py-52"
				style={{
					backgroundImage: 'url("../bg-gradient.png")',
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			>
				<div className="container mx-auto p-6">
					<section className="bg-[rgba(255,255,255,0.6)] py-8 px-12 shadow-md rounded-lg mb-8">
						<h1 className="text-3xl font-bold mb-4">
							Job Position: Support Worker
						</h1>
						<p className="text-lg mb-4">
							As a Support Worker at Mighty Orchid Services, you will provide
							assistance to individuals with disabilities, helping them achieve
							their personal goals and maintain their independence. You will be
							part of a dedicated team committed to delivering high-quality
							care.
						</p>
						<h2 className="text-2xl font-semibold mb-4">
							Key Responsibilities
						</h2>
						<ul className="list-disc list-inside mb-4">
							<li>
								Assist clients with daily living tasks such as meal preparation,
								cleaning, and laundry.{" "}
							</li>
							<li>
								Provide personal care including bathing, dressing, grooming, and
								medication management.{" "}
							</li>
							<li>
								Foster emotional and mental well-being through companionship and
								empathetic engagement.{" "}
							</li>
							<li>
								Regularly assess client needs, maintain detailed health records,
								and report any significant changes.{" "}
							</li>
							<li>
								Support clients in maintaining and developing their
								independence.{" "}
							</li>
							<li>
								Adhere to safety protocols and infection control measures.{" "}
							</li>
						</ul>
						<h2 className="text-2xl font-semibold mb-4">
							Required Skills and Qualifications
						</h2>
						<ul className="list-disc list-inside mb-4">
							<li>
								Completion of NDIS Worker Orientation Program and Supporting
								People to Stay Infection Free module.{" "}
							</li>
							<li>
								{
									"Necessary certifications such as Working with Children Check (if applicable) and NDISWC."
								}{" "}
							</li>
							<li>{`Must have a valid Driver's License and Passport.`} </li>
							<li>At least six months of experience in a support role. </li>
							<li>
								Certificate III or IV in Individual Support, or a Diploma in
								Community Services is preferred.{" "}
							</li>
							<li>Physical capability to perform job duties. </li>
							<li>
								Ability to work independently and collaboratively within a team.{" "}
							</li>
							<li>
								A compassionate and patient approach with strong interpersonal
								and communication skills.{" "}
							</li>
						</ul>
					</section>

					<section className="bg-[rgba(255,255,255,0.6)] py-8 px-12 shadow-md rounded-lg">
						<h2 className="text-2xl font-bold mb-4">Apply for this Job</h2>
						<p className="text-lg mb-4">
							If you are interested in applying, please send an email to{" "}
							<a
								href="mailto:info@mtos.com.au"
								className=" text-mto-orange hover:text-mto-blue transition"
							>
								Info@mtos.com.au
							</a>{" "}
							with your personal details and resume.
						</p>
					</section>
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
									alt="Logo"
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
							src="https://mtos.com.au/other-assets/KDCCI.jpg"
							alt="KDDCI"
						/>
					</a>
					<a href="https://www.onslowcci.com.au/">
						<img
							className=" w-72 p-5 mt-10"
							src="https://mtos.com.au/other-assets/OCCI.svg"
							alt="OCCI"
						/>
					</a>
				</div>
			</section>
		</>
	);
}
