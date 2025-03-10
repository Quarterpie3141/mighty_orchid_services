"use client";
import { Footer, Header } from "../../../components";
import PhotoGrid from "../../components/PhotoGrid";

export default function Home() {
	const imageUrls = Array.from(
		{ length: 40 },
		(_, i) =>
			`https://cdn.mtos.com.au/images/respite-houses/10-grant-street-bulgarra/IMG_${i + 1}.jpeg`,
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
								10 Grant Street, Bulgarra
							</h1>
							<h1 className=" text-xl">
								Welcome to 10 Grant Street, Bulgarra—a perfect haven designed
								for comfort, convenience, and inclusivity. This beautiful
								property offers a glimpse into modern living with its
								thoughtfully designed interiors, spacious layouts, and features
								tailored for accessibility.
								<br />
								<br />
								The house is equipped with disability-friendly amenities,
								ensuring ease of movement and comfort for everyone. From
								accessible entrances and wide doorways to carefully designed
								spaces, every detail has been considered to create a welcoming
								environment for individuals with diverse needs.
								<br />
								<br />
								Take a virtual tour of the house through our Photo Gallery below
								to discover its features, ambiance, and inclusive design.
							</h1>
						</div>
						<div className="w-5/6 max-w-[50rem] md:min-w-[20rem] min-w-[10rem]">
							<img
								src="https://cdn.mtos.com.au/images/respite-houses/10-grant-street-bulgarra/IMG_32.jpeg"
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
