export default function Help() {
	return (
		<section
			className="py-24 md:pb-32 bg-white"
			style={{
				backgroundImage: 'url("svg/pattern-white.svg")',
				backgroundPosition: "center",
			}}
			id="services"
		>
			<div className="container px-4 mx-auto">
				<div className="md:max-w-4xl mb-12 mx-auto text-center">
					<span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-orange font-medium uppercase rounded-full shadow-sm">
						Services
					</span>
					<h1 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
						How can we help you?
					</h1>
					<p className="text-lg md:text-xl text-coolGray-500 font-medium">
						We strive to provide the highest quality support to ensure the best
						outcomes for our clients. These supports are some of the many ways
						we assist individuals with disabilities to find, retain, and thrive
						in suitable communities.
					</p>
				</div>
				<div className="flex flex-wrap -mx-4 align">
					<div className="w-full md:w-1/2 lg:w-1/3 px-4">
						<div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
							<div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-mto-blue rounded-lg">
								<img
									width={35}
									height={35}
									src="/service-svg/home-svgrepo-com(1).svg"
									alt="Service"
								/>
							</div>
							<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
								Supported Independent Living (SIL)
							</h3>
							<p className="text-coolGray-500 font-medium">
								Your NDIS plan includes SIL funding, enabling you to live with
								friends or acquaintances who also have disabilities, while
								providing for a support worker to assist you.
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 px-4">
						<div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
							<div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-mto-blue rounded-lg">
								<img
									width={35}
									height={35}
									src="/service-svg/care-treatment-heart-svgrepo-com(1).svg"
									alt="Heart"
								/>
							</div>
							<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
								Respite
							</h3>
							<p className="text-coolGray-500 font-medium pt-4">
								{
									"The NDIS refers to respite as 'short term accommodation' or STA, which is designed to offer a break to individuals with a disability and their serving as caregivers."
								}
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 px-4">
						<div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
							<div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-mto-blue rounded-lg">
								<img
									width={35}
									height={35}
									src="/service-svg/community-group-leader-svgrepo-com.svg"
									alt="Service"
								/>
							</div>
							<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
								Community Access
							</h3>
							<p className="text-coolGray-500 font-medium">
								Community access involves providing support to ensure you
								maintain connections with friends, family, and your favorite
								relaxation spots, as well as to participate in local community
								events and activities.
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 px-4">
						<div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
							<div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-mto-blue rounded-lg">
								<img
									width={35}
									height={35}
									src="/service-svg/life-insurance-svgrepo-com.svg"
									alt="life"
								/>
							</div>
							<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
								Daily Life
							</h3>
							<p className="text-coolGray-500 font-medium">
								Daily life encompasses various activities you undertake daily to
								ensure your safety, health, and connection with family and
								friends. This may include tasks like cleaning the house, doing
								laundry, grocery shopping, or paying bills.
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 px-4">
						<div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
							<div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-mto-blue rounded-lg">
								<img
									width={35}
									height={35}
									src="/service-svg/life-svgrepo-com.svg"
									alt="Life"
								/>
							</div>
							<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
								High Intensity Supports
							</h3>
							<p className="text-coolGray-500 font-medium">
								High intensity supports in the Australian NDIS are specialized
								services for individuals with complex needs, requiring skilled
								providers to manage significant physical or health conditions.
							</p>
						</div>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 px-4">
						<div className="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
							<div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-mto-blue rounded-lg">
								<img
									width={35}
									height={35}
									src="service-svg/work-svgrepo-com.svg"
									alt="Work"
								/>
							</div>
							<h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
								Employment Related Supports
							</h3>
							<p className="text-coolGray-500 font-medium">
								Employment-related supports in the Australian NDIS are tailored
								services assisting individuals with disabilities to find,
								retain, and thrive in suitable employment.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
