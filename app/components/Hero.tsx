import type React from "react";
import Collage from "./subcomonents/Collage";

// collage images to cyle through
const collage_images = [
	<img
		key={"0"}
		className="relative rounded-3xl h-auto"
		src="https://cdn.mtos.com.au/images/collage-content/C0.png"
		alt=""
	/>,
	<img
		key={"1"}
		className="relative rounded-3xl h-auto"
		src="https://cdn.mtos.com.au/images/collage-content/C1.png"
		alt=""
	/>,
	<img
		key={"2"}
		className="relative rounded-3xl h-auto"
		src="https://cdn.mtos.com.au/images/collage-content/C2.png"
		alt=""
	/>,
	<img
		key={"3"}
		className="relative rounded-3xl h-auto"
		src="https://cdn.mtos.com.au/images/collage-content/C3.png"
		alt=""
	/>,
	<img
		key={"4"}
		className="relative rounded-3xl h-auto"
		src="https://cdn.mtos.com.au/images/collage-content/C4.png"
		alt=""
	/>,
	<img
		key={"5"}
		className="relative rounded-3xl h-auto"
		src="https://cdn.mtos.com.au/images/collage-content/C5.png"
		alt=""
	/>,
	<img
		key={"6"}
		className="relative rounded-3xl h-auto"
		src="https://cdn.mtos.com.au/images/collage-content/C6.png"
		alt=""
	/>,
];

export default function Hero() {
	return (
		<section>
			<div className="py-15 md:py-20">
				<div className="container px-4 mx-auto">
					<div className="flex flex-wrap xl:items-center -mx-4">
						<div className="w-full md:w-1/2 px-4 mb-16 md:mb-0 ">
							<img
								className="h-auto w-60 mx-auto md:hidden flex"
								src="/other-assets/TAGRegisteredProvider.svg"
								alt=""
							/>
							<span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-transparent uppercase rounded-9xl rounded" />
							<h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">
								People Looking After People.
							</h1>
							<p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
								Our commitment as a registered NDIS services provider ensures
								that individuals and their families receive support and services
								adhering to the highest standards of quality and care.
							</p>
							<div className="flex flex-wrap">
								<div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
									<a
										className="inline-block py-5 px-7 w-full text-base lg:bg md:text-lg leading-4 text-white font-medium text-center bg-mto-blue hover:bg-mto-orange focus:ring-2 focus:ring-white focus:ring-opacity-50 border border-mto-blue rounded-lg shadow-sm transition duration-200"
										href="#services"
									>
										Explore our services
									</a>
								</div>
								<div className="w-full md:w-auto py-1 md:py-0">
									<a
										className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm"
										href="#contact-form"
									>
										Contact us
									</a>
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/2 px-4">
							<div className="relative mx-auto md:mr-0 max-w-max">
								<img
									className="absolute z-10 -left-14 -top-12 w-28 md:w-auto"
									src="svg/circle3-yellow.svg"
									alt=""
								/>
								<img
									className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto"
									src="svg/dots3-blue.svg"
									alt=""
								/>
								<Collage items={collage_images} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
