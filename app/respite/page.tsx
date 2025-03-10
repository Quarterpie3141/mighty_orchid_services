"use client";
import { Footer, Header } from "../components";
import HouseCard from "./components/HouseCard";

export default function Home() {
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
							<div className="md:w-3/4 ">
								<h1 className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
									At MTOS, we take pride in offering purpose-built respite
									houses designed to provide a safe, comfortable, and inclusive
									environment for everyone.
									<br />
									<br />
									Each home is thoughtfully crafted to meet modern living
									standards, ensuring accessibility and convenience for all
									guests. Whether you're looking for a peaceful retreat or a
									place to connect with others, our respite houses are here to
									support your needs.
								</h1>
							</div>
						</div>
						<div className="w-5/6 max-w-[50rem] md:min-w-[20rem] min-w-[10rem]">
							<img
								src="https://cdn.mtos.com.au/images/respite-houses/cover.jpg"
								className=" h-auto w-auto rounded-3xl m-8"
								alt=""
							/>
						</div>
					</div>
				</div>

				<div className=" bg-mto-blue-100 w-11/12 m-auto h-auto rounded-[4rem]">
					<div className=" flex m-auto w-5/6 pt-28 flex-wrap relative">
						<HouseCard
							image="https://cdn.mtos.com.au/images/respite-houses/10-grant-street-bulgarra/cover.jpeg"
							name="Grant Street Bulgarra"
							address="10 Grant Street Bulgarra"
							link="/respite/houses/10-Grant-Street-Bulgarra"
						/>
						<HouseCard
							image="https://cdn.mtos.com.au/images/respite-houses/35-mujira-ramble-baynton/cover.jpeg"
							name="Mujira Ramble Baynton"
							address="35 Mujira Ramble Baynton"
							link="/respite/houses/35-Mujira-Ramble-Baynton"
						/>
						<HouseCard
							image="https://cdn.mtos.com.au/images/respite-houses/39B-delambre-drive-nickol/cover.jpeg"
							name="Delambre Drive, Nickol"
							address="39B Delambre Drive, Nickol"
							link="/respite/houses/39B-Delambre-Drive-Nickol"
						/>
						<HouseCard
							image="https://cdn.mtos.com.au/images/respite-houses/7a-jennifer-court-pegscreek/cover.jpeg"
							name="Jennifer Court Pegscreek"
							address="7A Jennifer Court Pegscreek"
							link="/respite/houses/7a-Jennifer-Court-Pegscreek"
						/>
						<HouseCard
							image="https://cdn.mtos.com.au/images/respite-houses/39E-delambre-drive-nickol/cover.jpeg"
							name="Delambre Drive Nickol"
							address="139E-delambre-drive-nickol"
							link="/respite/houses/39E-Delambre-Drive-Nickol"
						/>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
