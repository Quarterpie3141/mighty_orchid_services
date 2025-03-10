"use client";
import { Footer, Header } from "../../../components";
import PhotoGrid from "../../components/PhotoGrid";

export default function Home() {
	const imageUrls = Array.from(
		{ length: 1 },
		(_, i) =>
			`https://cdn.mtos.com.au/images/respite-houses/39E-delambre-drive-nickol/IMG_${i + 1}.jpeg`,
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
								39E Delambre Drive Nickol
							</h1>
							<h1 className="text-xl">
								Welcome to 39E Delambre Drive, Nickol—a home designed to offer
								the perfect combination of style, comfort, and inclusivity.
								Situated in a vibrant and welcoming community, this property
								features modern interiors and practical layouts tailored for
								easy living.
								<br />
								<br />
								Accessibility is at the heart of this home, with
								disability-friendly features including wide hallways, and
								thoughtfully planned spaces that prioritize ease of movement and
								convenience. Whether relaxing indoors or enjoying the outdoor
								areas, every detail has been designed to create a space where
								everyone feels at home.
								<br />
								<br />
								Explore the beauty and functionality of this remarkable property
								through our Photo Gallery below. Discover why 39E Delambre Drive
								is more than just a house—it’s a place to call home.
							</h1>
						</div>
						<div className="w-5/6 max-w-[50rem] md:min-w-[20rem] min-w-[10rem]">
							<img
								src="https://cdn.mtos.com.au/images/respite-houses/39E-delambre-drive-nickol/cover.jpeg"
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
