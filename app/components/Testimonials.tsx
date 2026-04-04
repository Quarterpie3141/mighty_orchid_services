"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
	{
		quote:
			"We are really happy with Mighty Orchid Services. Great to have experienced and most importantly HAPPY staff on our daughter's care team - when the staff are happy and supported by the management you can really see the difference. Mighty Orchid have been really professional and organised with onboarding, communicating and invoicing from Day 1. The staff who provide care to my daughter are reliable and fantastic at what they do!",
		author: "Jodie Crane",
		role: "Participant's Family Member",
	},
	{
		quote:
			"Mighty orchid services is like my second family, always very supportive, easy to communicate with and all together wonderful.",
		author: "Rebecca Matthews",
		role: "Participant",
	},
	{
		quote:
			"I wanted to thank you for choosing David as my Brothers Carer while I was away. David was very professional at all times but also very caring and understanding, he took very good care of my Brother and house, and I am very grateful for David's help and expertise. I didn't have to worry about anything while I was away, although I did check if they were going ok. I Appreciate and thank David for everything.",
		author: "Rosemary",
		role: "Participant's Family Member",
	},
	{
		quote:
			"I wanted to express my greatest thanks and appreciation to David and his amazing, outstanding efforts for our son. David goes above and beyond for Lee! We've not had a supportive worker like David. If Lee doesn't want to engage, Dave will find things to do in the home to support our family, this means a lot and is really appreciated. Lee and Dave's bond is growing and it is very noticeable! Thank you Mighty Orchid for your amazing support to our family",
		author: "Tash, Gary, Lee, Nijel and Roxy",
		role: "Participant's Family",
	},
	{
		quote:
			"Since engaging with Mighty Orchid Services (MTO) for the support of my two sons, Lee and Nijel, our journey has been truly transformative. From the very beginning, MTO has shown care, compassion, and understanding beyond anything we've experienced before. During difficult times, the Mighty Orchid Team stood by our side — offering comfort, consistency, and unwavering support. Their empathy and respect for our family and culture have made an incredible difference in our lives. The support we've received has been healing and genuine. MTO has become more than a provider — they are our anchor, our safe space, and our extended family.",
		author: "Participant's Family Member",
		role: "Participant's Family",
	},
];

export default function Testimonials() {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [isAutoScrolling, setIsAutoScrolling] = useState(true);
	const animationFrameRef = useRef<number | null>(null);

	useEffect(() => {
		const container = scrollContainerRef.current;
		if (!container) return;

		if (!isAutoScrolling) {
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}
			return;
		}

		let scrollPos = container.scrollLeft;

		const animate = () => {
			scrollPos += 0.3;
			container.scrollLeft = scrollPos;
			animationFrameRef.current = requestAnimationFrame(animate);
		};

		animationFrameRef.current = requestAnimationFrame(animate);

		return () => {
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}
		};
	}, [isAutoScrolling]);

	const handleClick = () => setIsAutoScrolling((prev) => !prev);

	return (
		<section
			className="py-24 md:pb-28 bg-white"
			style={{
				backgroundImage: 'url("svg/pattern-white.svg")',
				backgroundPosition: "center",
			}}
		>
			<div className="container px-4 mx-auto">
				<div className="mb-16">
					<span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-orange font-medium uppercase rounded-full">
						Testimonials
					</span>
					<h2 className="mb-4 text-4xl md:text-5xl leading-tight font-semibold tracking-tighter">
						Voices of Experience
					</h2>
					<p className="text-xl font-medium text-coolGray-500">
						{`Discover what our participants have to say about their journey with us. Through their stories, you'll gain insight into the impact of our support and the transformative experiences our participants have undergone. From overcoming challenges to achieving milestones, these testimonials showcase the real-life successes of individuals within our community.`}
					</p>
				</div>

				<div
					ref={scrollContainerRef}
					onClick={handleClick}
					onKeyDown={handleClick}
					className="overflow-x-auto scrollbar-hide"
					style={{
						scrollbarWidth: "none",
						msOverflowStyle: "none",
					}}
				>
					<style>{`
						.scrollbar-hide::-webkit-scrollbar {
							display: none;
						}
					`}</style>
					<div className="flex gap-6 pb-4">
						{[
							...testimonials,
							...testimonials,
							...testimonials,
							...testimonials,
						].map((testimonial, index) => (
							<div
								key={`${testimonial.author}-${index}`}
								className="flex-shrink-0 w-full md:w-96 lg:w-[28rem]"
							>
								<div className="flex flex-col h-full p-8 bg-coolGray-50 shadow-md rounded-md min-h-80">
									<h3 className="mb-6 text-lg md:text-lg font-medium leading-relaxed flex-grow">
										{`"${testimonial.quote}"`}
									</h3>
									<div>
										<h4 className="mb-1 text-lg font-semibold">
											- {testimonial.author}
										</h4>
										<p className="text-lg text-coolGray-400">
											{testimonial.role}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
