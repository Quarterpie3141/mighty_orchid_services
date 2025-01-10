"use client";
import { Footer, Header } from "../../../components";
import PhotoGrid from "../../components/PhotoGrid";

export default function Home() {
	const houseImages = [
		"https://i.imgur.com/13j0svE.png",
		"https://i.imgur.com/13j0svE.png",
		"https://i.imgur.com/13j0svE.png",
		"https://i.imgur.com/13j0svE.png",
		"https://i.imgur.com/13j0svE.png",
	];

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
								Discover Our dedicated respite houses
							</h1>
						</div>
						<div className="w-5/6 max-w-[50rem] md:min-w-[20rem] min-w-[10rem]">
							<img
								src="https://i.imgur.com/13j0svE.png"
								className=" h-auto w-auto rounded-3xl m-8"
								alt=""
							/>
						</div>
					</div>
				</div>

				<div className=" bg-mto-blue-100 w-11/12 m-auto h-auto rounded-[4rem]">
					<PhotoGrid images={houseImages} />
				</div>
			</section>

			<Footer />
		</>
	);
}
