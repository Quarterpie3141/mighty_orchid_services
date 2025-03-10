"use client";
import { Footer, Header } from "../../../components";
import PhotoGrid from "../../components/PhotoGrid";

export default function Home() {
	const imageUrls = Array.from(
		{ length: 39 },
		(_, i) =>
			`https://cdn.mtos.com.au/images/respite-houses/35-mujira-ramble-baynton/IMG_${i + 1}.jpeg`,
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
								35 Mujira Ramble, Baynton
							</h1>
							<h1 className="text-xl">
								Welcome to 35 Mujira Ramble, Baynton—a sanctuary of modern
								living designed with comfort, style, and accessibility in mind.
								This stunning property showcases carefully planned interiors,
								spacious layouts, and thoughtful features that cater to a
								variety of needs.
								<br />
								<br />
								Designed for inclusivity, the house boasts disability-friendly
								amenities such as wide doorways, and adaptable spaces that
								ensure ease of movement and accessibility for all. Whether
								relaxing indoors or enjoying the outdoor areas, every detail has
								been crafted to create a welcoming environment.
								<br />
								<br />
								Explore the charm and functionality of this beautiful home
								through our Photo Gallery below. Experience its unique features,
								serene ambiance, and the thoughtful design that makes it a
								perfect haven for everyone.
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
