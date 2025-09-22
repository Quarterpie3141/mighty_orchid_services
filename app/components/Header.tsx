"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
	const [navVis, setNavVis] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [moreOpen, setMoreOpen] = useState(false);
	const [isLargeScreen, setIsLargeScreen] = useState(
		typeof window !== "undefined" ? window.innerWidth >= 1024 : false,
	);

	useEffect(() => {
		const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const handleScroll = () => setNavVis(window.scrollY > 0);
		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close submenu when nav changes state or mobile menu closes
	useEffect(() => {
		if (!isOpen) setMoreOpen(false);
	}, [isOpen]);

	useEffect(() => {
		if (navVis) {
			setMoreOpen(false);
		}
	}, [navVis]);

	const navVariants = {
		expanded: {
			backgroundColor: "rgba(24,43,85,0)",
			padding: "20px 8px 0 8px",
			boxShadow: "none",
		},
		compact: {
			backgroundColor: "rgba(24,43,85,0.95)",
			padding: "8px 8px",
			boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
		},
	};

	const logoVariants = {
		expanded: { height: "5.5rem" },
		compact: { height: "3.5rem" },
	};

	// Main navigation items (excluding "More")
	const navItems = [
		["Our Services", "/#services"],
		["About us", "/#values"],
		["Events", "/events"],
		["Referrals", "/referrals/#"],
	];

	// Items within the "More" dropdown
	const moreItems = [
		["FAQs", "/#FAQ"],
		["Careers", "/careers"],
		["Values", "/values"],
		["Policies", "/policies"],
	];

	return (
		<section className="fixed top-0 left-0 w-full z-50">
			<motion.nav
				initial={false}
				animate={navVis ? "compact" : "expanded"}
				variants={navVariants}
				transition={{ duration: 0.3, ease: "easeInOut" }}
				className="flex items-center px-2 md:px-4"
				style={{
					minHeight: isLargeScreen ? 80 : 60,
					transform: "translateZ(0px)",
				}}
			>
				{/* Logo wrapper: centered on mobile, left on desktop */}
				<div className="flex-1 flex justify-center lg:justify-start items-center">
					<a
						href="/"
						className="flex items-center flex-shrink-0 px-3 py-2 md:px-4"
					>
						<motion.img
							initial={false}
							variants={logoVariants}
							animate={navVis ? "compact" : "expanded"}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className="h-10 md:h-12 lg:h-24 rounded-md md:ml-0"
							src="/branding/logo-horizontal.png"
							alt="Logo"
						/>
						{isLargeScreen && (
							<>
								<img
									className="hidden lg:inline-block h-16 w-auto ml-4 rounded-xl"
									src="/other-assets/weHeartNDIS.svg"
									alt=""
								/>
								<img
									src="/other-assets/TAGRegisteredProvider.svg"
									className="h-9 w-32 ml-4 lg:h-14 lg:w-48"
									alt="NDIS Registered"
								/>
							</>
						)}
					</a>
				</div>

				{/* Burger menu button for small screens */}
				<div className="flex lg:hidden items-center">
					<button
						type="button"
						onClick={() => setIsOpen((prev) => !prev)}
						aria-label="Toggle Menu"
						className="ml-2 text-white focus:outline-none hover:text-mto-orange pr-5"
					>
						<svg
							className="w-7 h-7"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<title>Menu</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
							/>
						</svg>
					</button>
				</div>

				{/* Desktop nav with "More" dropdown */}
				<div className="hidden lg:flex justify-end items-center flex-1">
					<ul className="flex items-center gap-6 mr-8 relative">
						{navItems.map(([label, href]) => (
							<li key={label}>
								<a
									className={`${
										navVis ? "text-white" : "text-coolGray-500"
									} hover:text-mto-orange font-medium transition-colors`}
									href={href}
								>
									{label}
								</a>
							</li>
						))}

						{/* More button with dropdown */}
						<li className="relative">
							<button
								onClick={() => setMoreOpen((prev) => !prev)}
								className={`flex items-center ${
									navVis ? "text-white" : "text-coolGray-500"
								} hover:text-mto-orange font-medium transition-colors focus:outline-none`}
								aria-expanded={moreOpen}
								aria-haspopup="true"
								type="button"
							>
								More
								<svg
									className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${
										moreOpen ? "rotate-180" : ""
									}`}
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<title>Arrow pointing down</title>
									<path
										fillRule="evenodd"
										d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
							<AnimatePresence>
								{moreOpen && (
									<motion.ul
										initial={{ opacity: 0, y: -5 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -5 }}
										transition={{ duration: 0.2 }}
										className="absolute left-0 mt-2 w-40 bg-mto-blue/95 rounded-md shadow-lg z-50"
									>
										{moreItems.map(([label, href]) => (
											<li key={label}>
												<a
													href={href}
													className="block px-4 py-2 text-white hover:bg-mto-orange transition-colors"
												>
													{label}
												</a>
											</li>
										))}
									</motion.ul>
								)}
							</AnimatePresence>
						</li>
					</ul>
					<a
						className="inline-block py-1.5 px-4 text-sm leading-5 text-white bg-mto-blue hover:bg-mto-orange font-semibold rounded-md transition duration-150"
						href="/#contact-form"
					>
						Contact Us
					</a>
				</div>
			</motion.nav>

			{/* Slide-in mobile menu with nested "More" */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 40 }}
						transition={{ duration: 0.2, ease: "easeInOut" }}
						className="lg:hidden absolute w-full left-0 top-full bg-mto-blue/95 shadow-xl z-50"
					>
						<ul className="flex flex-col py-4 text-lg font-medium w-full">
							{navItems.map(([label, href]) => (
								<li
									key={label}
									className="px-6 py-2 border-b border-mto-blue/20 last:border-none"
								>
									<a
										href={href}
										className="block text-white hover:text-mto-orange transition-colors"
										onClick={() => setIsOpen(false)}
									>
										{label}
									</a>
								</li>
							))}

							{/* More item for mobile */}
							<li className="px-6 py-2 border-b border-mto-blue/20 last:border-none">
								<button
									onClick={() => setMoreOpen((prev) => !prev)}
									type="button"
									className="w-full flex items-center justify-between text-white hover:text-mto-orange transition-colors focus:outline-none"
									onKeyDown={() => setMoreOpen((prev) => !prev)}
								>
									<span>More</span>
									<svg
										className={`ml-2 w-4 h-4 transform transition-transform duration-200 ${
											moreOpen ? "rotate-180" : ""
										}`}
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<title>Arrow pointing down</title>
										<path
											fillRule="evenodd"
											d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
								{/* Nested list in mobile */}
								<AnimatePresence>
									{moreOpen && (
										<motion.ul
											initial={{ opacity: 0, y: -5 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -5 }}
											transition={{ duration: 0.2 }}
											className="mt-2 ml-4 space-y-1"
										>
											{moreItems.map(([label, href]) => (
												<li key={label}>
													<a
														href={href}
														className="block text-white hover:text-mto-orange transition-colors"
														onClick={() => {
															setIsOpen(false);
															setMoreOpen(false);
														}}
													>
														{label}
													</a>
												</li>
											))}
										</motion.ul>
									)}
								</AnimatePresence>
							</li>

							{/* Contact in mobile */}
							<li className="px-6 py-3">
								<a
									className="block w-full text-center py-2 px-4 bg-mto-orange rounded-md text-white hover:bg-orange-500"
									href="#contact-form"
									onClick={() => setIsOpen(false)}
								>
									Contact Us
								</a>
							</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
