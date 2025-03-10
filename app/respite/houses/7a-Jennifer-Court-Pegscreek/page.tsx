"use client";
import { Footer, Header } from "../../../components";
import PhotoGrid from "../../components/PhotoGrid";

export default function Home() {
	const imageUrls = Array.from(
		{ length: 1 },
		(_, i) =>
			`https://cdn.mtos.com.au/images/respite-houses/7a-jennifer-court-pegscreek/IMG_${i + 1}.jpeg`,
	);

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
								7A Jennifer Court Pegscreek
							</h1>
							<h1 className="text-xl">
								Welcome to 7A Jennifer Court, Pegscreek—a home that perfectly
								blends comfort, functionality, and inclusivity. Nestled in a
								peaceful neighborhood, this property is thoughtfully designed to
								meet modern living standards while ensuring accessibility for
								all.
								<br />
								<br />
								The house features disability-friendly amenities, including
								spacious interiors, and practical layouts that promote ease of
								movement. Every detail has been carefully considered to create a
								space that is both welcoming and accommodating for individuals
								with diverse needs.
								<br />
								<br />
								Take a virtual tour through our Photo Gallery below to explore
								the unique charm and inclusive design of this beautiful home.
								Discover how 7A Jennifer Court offers a perfect balance of
								style, comfort, and accessibility.
							</h1>
						</div>
						<div className="w-5/6 max-w-[50rem] md:min-w-[20rem] min-w-[10rem]">
							<img
								src="https://cdn.mtos.com.au/images/respite-houses/7a-jennifer-court-pegscreek/cover.jpeg"
								className=" max-h-[600px] w-auto rounded-3xl m-8"
								alt=""
							/>
						</div>
					</div>
				</div>

				<div className=" bg-mto-blue-100 w-11/12 m-auto h-auto rounded-[4rem]">
					<PhotoGrid images={imageUrls} />
				</div>
			</section>

			<Footer />
		</>
	);
}
