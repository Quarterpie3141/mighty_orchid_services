"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Rubik_Dirt } from "next/font/google";
import { useEffect, useState } from "react";
import { Footer, Header } from "../components";

const anton = Rubik_Dirt({
	subsets: ["latin"],
	weight: "400", // Specify the font weight(s) you need
});

export default function Careers() {
	return (
		<>
			{/* Header */}
			<Header />
			{/* Careers */}
			<section
				className=" py-52 md:py-58 bg-white"
				style={{
					backgroundImage: 'url("../bg-gradient.png")',
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
				id="careers"
			>
				<div className="bg-mto-blue w-4/5 m-auto rounded-3xl h-[100vh] md:h-[75vh] flex items-center flex-col md:flex-row">
					<div className="md:w-1/2 h-max flex justify-center">
						<img
							className="rounded-lg w-full max-w-72 h-auto md:max-w-[28rem] md:h-auto mt-10 md:mt-0"
							src="/events/international-day-of-people-with-disability.jpeg"
							alt="event-poster"
						/>
					</div>
					<div className="md:w-1/2 h-max flex">
						<div className="h-auto m-auto w-10/12">
							<h1
								className={`text-white text-4xl md:text-5xl ${anton.className}`}
							>
								The International Day Of People With Disabilities
							</h1>
							<div className="rounded-xl bg-mto-orange w-max px-3">
								<h1 className="text-white text-sm md:text-md font-bold">
									3rd December 2024
								</h1>
							</div>
							<h1 className="text-white text-sm md:text-lg font-bold my-4">
								Join us to celebrate the International Day of People with
								Disabilities! 🎉
							</h1>
							<div className="w-full ml-0 md:ml-4">
								<h1 className="text-white text-sm md:text-lg font-bold">
									📅 When: Tuesday, 3rd December 2024
								</h1>
								<h1 className="text-white text-sm md:text-lg font-bold">
									⏰ Time: 10:00 AM – 2:00 PM
								</h1>
								<h1 className="text-white text-sm md:text-lg font-bold mb-4">
									📍 Where: Tambrey Pavilion, Lot 4227 Tambrey Dr, Nickol WA
								</h1>
							</div>
							<h1 className="text-white text-sm md:text-lg font-bold mb-4">
								Come along to enjoy a community expo filled with fun,
								connection, and support. A free lunch will be served from 12:00
								PM to 1:00 PM 🍴.
							</h1>
							<h1 className="text-white text-sm md:text-lg font-bold mb-4">
								This event is hosted by Good Turn Services and Mighty Orchid
								Services, with support from amazing local organizations. It's a
								great opportunity to meet people, explore services, and
								celebrate inclusion and diversity.
							</h1>
							<h1 className="text-white text-sm md:text-lg font-bold mb-4">
								Feel free to reach out if you’d like more info or to book a
								stall! Hope to see you there! 😊
							</h1>
						</div>
					</div>
				</div>
			</section>
			{/* Footer */}
			<Footer />
		</>
	);
}
