"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
	const [navVis, setNavVis] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const variants = {
		expanded: {
			backdropFilter: "blur(0px)",
			backgroundColor: "rgba(24,43,85,0)",
			padding: "1.5rem 1rem 0rem 1rem", // Top, Right, Bottom, Left
		},
		compact: {
			backdropFilter: "blur(8px)",
			backgroundColor: "rgba(24,43,85,0.9)",
			padding: "0.5rem",
		},
	};
	const imageVariantsLogo = {
		compact: { height: "3.5rem" },
		expanded: { height: "7rem" },
	};
	const imageVariants = {
		compact: { height: "3.5rem", opacity: 0 },
		expanded: { height: "7rem" },
	};
	const nidsTagImageVariants = {
		compact: {
			height: "auto",
			width: "9rem",
			padding: "0rem 0rem 0rem 1.8rem",
			filter: "invert(1)",
		},
		expanded: {
			height: "auto",
			width: "15rem",
			padding: "0rem 0rem 0rem 1rem",
			filter: "none",
		},
	};

	const handleScroll = () => {
		const position = window.scrollY;
		setNavVis(position > 0);
	};

	const handleMenuToggle = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	const [isLargeScreen, setIsLargeScreen] = useState(false);

	// Track window size
	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth >= 1024);
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<section className="bg-transparent fixed w-full top-0 z-50">
			<motion.nav
				animate={navVis ? "compact" : "expanded"}
				variants={variants}
				className="flex md:justify-between justify-center px-4"
			>
				<div className="md:flex md:items-center md:justify-between md:w-full md:mx-4">
					<div className="flex items-center md:flex-1">
						<a href="/" className="flex">
							<motion.img
								variants={imageVariantsLogo}
								animate={navVis ? "compact" : "expanded"}
								layout
								className="md:ml-[2vw] mx-auto md:mx-0 md:h-24 h-12 rounded-xl"
								src="/branding/logo-horizontal.png"
								alt=""
							/>

							<AnimatePresence>
								{!navVis && isLargeScreen && (
									<motion.img
										variants={imageVariants}
										animate={navVis ? "compact" : "expanded"}
										initial={{ height: "0" }}
										exit={{ height: "0" }}
										transition={{ duration: 0.2 }}
										className="md:ml-[2vw] mx-auto md:mx-0 md:h-24 w-auto lg:flex hidden rounded-xl"
										src="/other-assets/weHeartNDIS.svg"
										alt=""
									/>
								)}
							</AnimatePresence>

							{isLargeScreen && (
								<motion.img
									src="/other-assets/TAGRegisteredProvider.svg"
									className="h-auto w-48"
									layout
									variants={nidsTagImageVariants}
									animate={navVis ? "compact" : "expanded"}
								/>
							)}
						</a>
						<div className="md:hidden flex items-center relative">
							<button
								type="button"
								onClick={handleMenuToggle}
								className={`text-white focus:outline-none hover:text-mto-orange flex absolute left-[16vw] ${navVis ? "" : "hidden"}`}
							>
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>Menu</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d={
											isOpen
												? "M6 18L18 6M6 6l12 12"
												: "M4 6h16M4 12h16M4 18h16"
										}
									/>
								</svg>
							</button>
						</div>
					</div>
					<div
						className={`${isOpen ? "block h-[100vh]" : "hidden"} md:flex md:items-center md:justify-end md:flex-1 mt-8 md:mt-0`}
					>
						<ul className="flex flex-col md:flex-row md:mr-12 :flex-wrap">
							<li className="md:mr-12 md:p-0 p-5">
								<a
									className={`${navVis ? "text-white" : "text-coolGray-500"} hover:text-mto-orange font-medium flex-nowrap flex`}
									href="/#services"
								>
									Our Services
								</a>
							</li>
							<li className="md:mr-12 md:p-0 p-5">
								<a
									className={`${navVis ? "text-white" : "text-coolGray-500"} hover:text-mto-orange font-medium flex-nowrap flex`}
									href="/#values"
								>
									About us
								</a>
							</li>
							<li className="md:mr-12 md:p-0 p-5">
								<div className="relative inline-block">
									<a
										className={`${navVis ? "text-white" : "text-coolGray-500"} hover:text-mto-orange font-medium flex-nowrap flex`}
										href="/events"
									>
										Events
									</a>
									{/*<span className="absolute top-0 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
										1
									</span>*/}
								</div>
							</li>
							<li className="md:mr-12 md:p-0 p-5">
								<a
									className={`${navVis ? "text-white" : "text-coolGray-500"} hover:text-mto-orange font-medium flex-nowrap flex`}
									href="/careers"
								>
									Careers
								</a>
							</li>
							<li className="md:mr-12 md:p-0 p-5">
								<a
									className={`${navVis ? "text-white" : "text-coolGray-500"} hover:text-mto-orange font-medium flex-nowrap flex`}
									href="/#FAQ"
								>
									FAQ
								</a>
							</li>
							<li className="p-5 md:p-0">
								<a
									className={`${navVis ? "text-white" : "text-coolGray-500"} hover:text-mto-orange font-medium`}
									href="/#Footer"
								>
									More⤵
								</a>
							</li>
						</ul>
						<a
							className="inline-block py-2 px-4 text-sm leading-5 text-white bg-mto-blue hover:bg-mto-orange font-medium focus:ring-2 focus:ring-coolGray-500 focus:ring-opacity-50 rounded-md transition duration-150 flex-nowrap"
							href="#contact-form"
						>
							Contact Us
						</a>
					</div>
				</div>
			</motion.nav>
		</section>
	);
}
