"use client";
import { Footer, Header } from "../../../components";
import PhotoGrid from "../../components/PhotoGrid";

export default function Home() {
	const imageUrls = Array.from(
		{ length: 9 },
		(_, i) =>
			`https://cdn.mtos.com.au/images/respite-houses/30-golden-retreat-perth/IMG_${i + 1}.jpeg`,
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
								30 Golden Retreat, Perth
							</h1>
							<h1 className="text-xl">
								Welcome to 30 Golden Retreat, Perth. A warm and welcoming home
								designed with comfort, accessibility, and independence in mind.
								Located in a quiet Perth neighbourhood, this property offers a
								relaxed setting for participants.
								<br />
								<br />
								The home features accessible interiors, spacious living areas,
								and practical layouts that support ease of movement. Every
								detail has been carefully considered to create a space that is
								safe, comfortable, and accommodating for individuals with
								diverse needs.
								<br />
								<br />
								Please explore the Photo Gallery below for a clearer
								understanding of the property's layout and features. This
								information is provided to help you assess whether 30 Golden
								Retreat may meet your accessibility and accommodation
								requirements.
							</h1>
						</div>
						<div className="w-5/6 max-w-[50rem] md:min-w-[20rem] min-w-[10rem]">
							<img
								src="https://cdn.mtos.com.au/images/respite-houses/30-golden-retreat-perth/IMG_1.jpeg"
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
