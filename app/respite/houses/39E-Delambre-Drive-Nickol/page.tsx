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
								Welcome to 39E Delambre Drive, Nickol. This property is designed
								to provide a comfortable, accessible, and practical living
								environment for participants. Both the interior and exterior
								spaces support ease of movement and independence.
								<br />
								<br />
								The home includes SDA-style bathrooms and toilets, a brand-new
								electric bed, and a spacious layout suitable for a wide range of
								mobility needs. Modern amenities are incorporated throughout to
								ensure safety, usability, and overall comfort.
								<br />
								<br />
								Please explore the Photo Gallery below for a clearer
								understanding of the property’s layout and features. This
								information is provided to help you assess whether 39E Delambre
								Drive may meet your accessibility and accommodation
								requirements.
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
