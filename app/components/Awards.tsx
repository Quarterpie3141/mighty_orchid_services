"use client";

import Link from "next/link";
import { useState } from "react";
import awards from "../awards-and-recognition/awards.json";

export default function Awards() {
	const [activeIndex, setActiveIndex] = useState(0);
	const activeAward = awards[activeIndex];

	const showPrevious = () => {
		setActiveIndex((prev) => (prev - 1 + awards.length) % awards.length);
	};

	const showNext = () => {
		setActiveIndex((prev) => (prev + 1) % awards.length);
	};

	return (
		<section className="py-24 bg-white">
			<div className="container px-4 mx-auto">
				<div className="grid items-center gap-12 lg:grid-cols-2">
					<div className="text-center lg:text-left">
						<span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-orange font-medium uppercase rounded-full shadow-sm">
							Awards and Recognition
						</span>
						<h2 className="text-4xl md:text-5xl leading-tight font-semibold tracking-tighter text-coolGray-900">
							Celebrating milestones that reflect our care
						</h2>
						<p className="mt-4 text-xl font-medium text-coolGray-500 max-w-2xl mx-auto lg:mx-0">
							From industry nominations to community acknowledgements, these
							moments represent the trust, commitment, and impact we bring to
							every participant and family we support.
						</p>
						<div className="mt-8 flex justify-center lg:justify-start">
							<Link
								href="/awards-and-recognition"
								className="inline-flex py-4 px-8 text-base font-medium text-white bg-mto-blue hover:bg-mto-orange rounded-lg shadow-md transition-colors"
							>
								View Awards Gallery
							</Link>
						</div>
					</div>

					<div className="border-l-4 border-mto-orange pl-6">
						{activeAward ? (
							<article>
								<img
									className="h-56 w-full object-contain"
									src={activeAward.imageSrc}
									alt={activeAward.title}
								/>
								<h3 className="mt-5 text-xl font-semibold text-coolGray-900">
									{activeAward.title}
								</h3>
								<p className="mt-2 text-base text-coolGray-500">
									{activeAward.description}
								</p>
								<div className="mt-5 flex items-center justify-between">
									<span className="text-sm text-coolGray-400">
										{activeIndex + 1} / {awards.length}
									</span>
									<div className="flex gap-2">
										<button
											type="button"
											onClick={showPrevious}
											className="px-4 py-2 text-sm font-medium text-mto-blue hover:text-mto-orange transition-colors"
										>
											← Prev
										</button>
										<button
											type="button"
											onClick={showNext}
											className="px-4 py-2 text-sm font-medium text-mto-blue hover:text-mto-orange transition-colors"
										>
											Next →
										</button>
									</div>
								</div>
							</article>
						) : null}
					</div>
				</div>
			</div>
		</section>
	);
}
