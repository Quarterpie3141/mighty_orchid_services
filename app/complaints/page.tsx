"use client";
import { useEffect, useState } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { FeedbackForm, Footer, Header } from "../components";

export default function Careers() {
	return (
		<GoogleReCaptchaProvider reCaptchaKey="6LfdUlkqAAAAAEKojQwPa5xKxSYkVRV-Jho82hi1">
			{/* Header */}
			<Header />
			<section
				className=" py-52 md:py-58 bg-white w-auto"
				style={{
					backgroundImage: 'url("../bg-gradient.png")',
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
				id="careers"
			>
				<div className="container mx-auto m-12 w-auto">
					<div className="md:max-w-4xl mb-12 mx-auto text-center">
						<span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-orange font-medium uppercase rounded-full shadow-sm">
							COMPLAINTS/FEEDBACK
						</span>
						<h1 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
							We Value Your Feedback
						</h1>
						<p className="text-lg md:text-xl text-coolGray-500 font-medium">
							At MTOS, we are committed to delivering the best possible
							experience to our customers. Your feedback is invaluable to us in
							ensuring we meet that goal. Whether you have a suggestion,
							compliment, or a complaint, we want to hear from you.
						</p>
					</div>

					<div className="md:max-w-4xl mb-12 mx-auto text-center">
						<h1 className="mb-4 text2xl md:text-2xl leading-tight font-bold tracking-tighter">
							How to Submit Your Feedback
						</h1>
						<p className="text-lg md:text-xl text-coolGray-500 font-medium">
							We encourage you to share your thoughts with us using the form
							below. Please provide as much detail as possible, so we can fully
							understand your experience and work towards a resolution if
							needed.
						</p>
						<ul className=" list-disc text-lg md:text-md text-coolGray-500 font-medium mx-24">
							<br />
							<li>
								Complaints: If something didn't meet your expectations, we
								sincerely apologize. Please let us know what happened, and we'll
								strive to resolve the issue promptly.
							</li>
							<br />
							<li>
								Suggestions: Have ideas on how we can improve? We welcome your
								creative input and will consider it for future enhancements.
							</li>
							<br />
							<li>
								Appreciation: If you had a positive experience with us, we'd
								love to hear about it! Your feedback helps us recognize our
								team's efforts and continue delivering great service.
							</li>
						</ul>
					</div>
					<FeedbackForm />
				</div>
			</section>
			{/* Footer */}
			<Footer />
		</GoogleReCaptchaProvider>
	);
}
