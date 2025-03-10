"use client";
import { Footer, Header } from "../../../components";
import PhotoGrid from "../../components/PhotoGrid";

export default function Home() {
	const imageUrls = Array.from(
		{ length: 27 },
		(_, i) =>
			`https://cdn.mtos.com.au/images/respite-houses/39B-delambre-drive-nickol/IMG_${i + 1}.jpeg`,
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
								39B Delambre Drive, Nickol
							</h1>
							<h1 className="text-lg">
								Discover the warmth and charm of 39B Delambre Drive, Nickol —a
								home thoughtfully designed for comfort, practicality, and
								inclusivity. With its modern interiors, open layouts, and
								welcoming atmosphere, this property is a perfect retreat for
								all.
								<br />
								<br />
								Accessibility is at the heart of this home, featuring
								disability-friendly amenities such as step-free access, wide
								doorways, and adaptable spaces that provide comfort and ease for
								everyone. Whether you're unwinding in the beautifully designed
								interiors or enjoying the outdoor spaces, this home ensures a
								seamless experience for all.
								<br />
								<br />
								Take a closer look at this exceptional property through our
								Photo Gallery below. Explore its stunning design, inclusive
								features, and inviting ambiance that make it an ideal place to
								call home.
							</h1>
						</div>
						<div className="w-5/6 max-w-[50rem] md:min-w-[20rem] min-w-[10rem]">
							<img
								src="https://cdn.mtos.com.au/images/respite-houses/39B-delambre-drive-nickol/cover.jpeg"
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
