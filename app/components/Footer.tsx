export default function Footer() {
	return (
		<section
			className="bg-white"
			style={{
				backgroundImage: 'url("svg/pattern-white.svg")',
				backgroundPosition: "center",
			}}
			id="Footer"
		>
			<div className="container px-4 mx-auto">
				<div className="pt-24 pb-0 mx-auto max-w-4xl justify-center">
					<a className="block mx-auto mb-5 max-w-max" href="/">
						<div className="pb-11 justify-center">
							<img
								src="/branding/logo-horizontal.png"
								className=" rounded-lg md:h-24 h-12"
								alt="Logo"
							/>
						</div>
					</a>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 justify-center mx-auto">
						<div className="w-full md:w-auto p-3 md:px-6 flex justify-center">
							<a
								className="inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium text-nowrap"
								href="/#services"
							>
								Our Services
							</a>
						</div>
						<div className="w-full md:w-auto p-3 md:px-6 flex justify-center">
							<a
								className="inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium text-nowrap"
								href="/#values"
							>
								About us
							</a>
						</div>
						<div className="w-full md:w-auto p-3 md:px-6 flex justify-center">
							<div className="relative inline-block">
								<a
									className="text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium text-nowrap"
									href="/events"
								>
									Events
								</a>
								<span className="absolute top-0 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
									1
								</span>
							</div>
						</div>
						<div className="w-full md:w-auto p-3 md:px-6 flex justify-center">
							<a
								className="inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium text-nowrap"
								href="/careers#"
							>
								Careers
							</a>
						</div>
						<div className="w-full md:w-auto p-3 md:px-6 flex justify-center">
							<a
								className="inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium text-nowrap"
								href="#FAQ"
							>
								FAQ
							</a>
						</div>
						<div className="w-full md:w-auto p-3 md:px-6 flex justify-center">
							<a
								className="inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium text-nowrap"
								href="/#contact-form"
							>
								Contact Us
							</a>
						</div>
						<div className="w-full md:w-auto p-3 md:px-6 flex justify-center">
							<a
								className="inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium text-nowrap"
								href="/"
							>
								Home
							</a>
						</div>
						<div className="w-full md:w-auto p-3 md:px-6 flex justify-center">
							<a
								className="inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium text-nowrap"
								href="/complaints"
							>
								Complaints/Feedback
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
						className="w-72 p-5 mr-40"
						alt="KDCCI"
						src="other-assets/KDCCI.jpg"
					/>
				</a>
				<a href="https://www.onslowcci.com.au/">
					<img
						className=" w-72 p-5 mt-10"
						alt="OCCI"
						src="other-assets/OCCI.svg"
					/>
				</a>
			</div>
		</section>
	);
}
