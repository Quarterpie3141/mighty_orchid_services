"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
	const [navVis, setNavVis] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	// Tracks large screens (lg: 1024px+)
	const [isLargeScreen, setIsLargeScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth >= 1024);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Track scroll for header collapse
	useEffect(() => {
		const handleScroll = () => setNavVis(window.scrollY > 0);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleMenuToggle = () => setIsOpen((prev) => !prev);

	const variants = {
		expanded: {
			backdropFilter: "blur(0px)",
			backgroundColor: "rgba(24,43,85,0)",
			padding: "1.25rem 0.5rem 0 0.5rem", // tighter at md
		},
		compact: {
			backdropFilter: "blur(8px)",
			backgroundColor: "rgba(24,43,85,0.95)",
			padding: "0.25rem 0.5rem",
		},
	};
	const logoVariants = {
		compact: { height: "3.5rem" }, // smaller on scroll/md
		expanded: { height: "5.5rem" },
	};

	return (
		<section className="bg-transparent fixed w-full top-0 z-50">
			<motion.nav
				animate={navVis ? "compact" : "expanded"}
				variants={variants}
				className="flex items-center justify-between px-2 md:px-4 transition-all duration-200"
				style={{ minHeight: isLargeScreen ? 80 : 60 }} // example
			>
				{/* Start: Brand/Logo */}
				<a
					href="/"
					className="flex items-center flex-shrink-0 px-3 py-2 md:px-4 mx-auto mr-14"
				>
					<motion.img
						variants={logoVariants}
						animate={navVis ? "compact" : "expanded"}
						className="h-10 md:h-12 lg:h-24 rounded-md md:ml-0"
						src="/branding/logo-horizontal.png"
						alt="Logo"
						style={{ marginRight: 8 }}
					/>
					{/* Hide WeHeartNDIS at md and below */}
					{isLargeScreen && (
						<motion.img
							className="hidden lg:inline-block h-16 w-auto ml-4 rounded-xl"
							src="/other-assets/weHeartNDIS.svg"
							alt=""
						/>
					)}
					{/* NDIS Tag - show only at lg */}
					{isLargeScreen && (
						<img
							src="/other-assets/TAGRegisteredProvider.svg"
							className="h-9 w-32 ml-4 lg:h-14 lg:w-48"
							alt="NDIS Registered"
						/>
					)}
				</a>
				{/* End: Brand/Logo */}

				{/* Burger (shown at md and below) */}
				<div className="flex lg:hidden items-center">
					<button
						type="button"
						onClick={handleMenuToggle}
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

				{/* Nav: horizontal ONLY on large (lg+) screens */}
				<div className="hidden lg:flex justify-end items-center flex-1">
					<ul className="flex items-center gap-6 mr-8">
						{[
							["Our Services", "/#services"],
							["About us", "/#values"],
							["Events", "/events"],
							["Careers", "/careers"],
							["Referrals", "/referrals/#"],
							["More⤵", "/#Footer"],
						].map(([label, href]) => (
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
					</ul>
					<a
						className="inline-block py-1.5 px-4 text-sm leading-5 text-white bg-mto-blue hover:bg-mto-orange font-semibold rounded-md transition duration-150"
						href="/#contact-form"
					>
						Contact Us
					</a>
				</div>
			</motion.nav>

			{/* MOBILE/TABLET: slide in menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 40 }}
						transition={{ duration: 0.2 }}
						className="lg:hidden absolute w-full left-0 top-full bg-mto-blue/95 shadow-xl z-50"
					>
						<ul className="flex flex-col py-4 text-lg font-medium w-full">
							{[
								["Our Services", "/#services"],
								["About us", "/#values"],
								["Events", "/events"],
								["Careers", "/careers"],
								["Referrals", "/referrals/#"],
								["More⤵", "/#Footer"],
							].map(([label, href]) => (
								<li
									key={label}
									className="px-6 py-2 border-b border-mto-blue/20 last:border-none"
								>
									<a
										href={href}
										className="block text-white hover:text-mto-orange transition-colors"
									>
										{label}
									</a>
								</li>
							))}
							<li className="px-6 py-3">
								<a
									className="block w-full text-center py-2 px-4 bg-mto-orange rounded-md text-white hover:bg-orange-500"
									href="#contact-form"
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
