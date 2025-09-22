"use client";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
export default function ContactForm() {
	const [formWaiting, setFormWaiting] = useState(false);
	const [formError, setFormError] = useState<string | null>(null);
	const [formSuccess, setFormSuccess] = useState(false);

	// State variables for form fields
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [phone, setPhone] = useState("");

	const { executeRecaptcha } = useGoogleReCaptcha();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setFormWaiting(true);
		setFormError(null);
		setFormSuccess(false);

		// Client-side validation
		if (!message) {
			setFormError("Please enter a message.");
			setFormWaiting(false);
			return;
		}

		if (!executeRecaptcha) {
			console.log("Recaptcha not ready");
			setFormError("Recaptcha not ready, please try again later.");
			setFormWaiting(false);
			return;
		}

		try {
			// Execute reCAPTCHA with the action name
			const token = await executeRecaptcha("form_submission");

			// Prepare data to send
			const dataToSend = {
				token,
				email,
				message,
				phone: phone || "Not provided",
				name,
			};

			// Send data to the server
			const response = await fetch(
				"https://sendmailfeedback-ejqhdbrtsq-uc.a.run.app",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(dataToSend),
				},
			);

			const result = await response.json();
			console.log(result);

			if (response.ok) {
				// Success
				setFormSuccess(true);
				setFormWaiting(false);
				// Clear form fields
				setEmail("");
				setName("");
				setMessage("");
				setPhone("");
			} else {
				// Server responded with an error
				setFormError(
					result.message || "An error occurred while submitting the form.",
				);
				setFormWaiting(false);
			}
		} catch (error) {
			console.error("An unexpected error occurred:", error);
			let errorMessage = "An unexpected error occurred. Please try again.";
			if (error instanceof Error) {
				errorMessage = error.message;
			}
			setFormError(errorMessage);
			setFormWaiting(false);
		}
	};

	return (
		<GoogleReCaptchaProvider reCaptchaKey="6LfVA-oqAAAAAPb9xgUrF4ZR_SX5wdIjCCCDxrMI">
			<section className="py-20 bg-transparent" id="contact-form">
				<script src="https://www.google.com/recaptcha/api.js" />
				<div className="container px-4 mx-auto">
					<div className="flex flex-wrap -mx-4 justify-center">
						<div className="w-full lg:w-1/2 px-4">
							<div className="px-4 py-8 md:p-10 bg-coolGray-50 rounded-md">
								<form
									className="pb-2"
									id="Contact-Form"
									onSubmit={handleSubmit}
								>
									<div className="mb-6">
										<div className="mb-6">
											<label
												className="w-1/2 pl-2 mb-2 text-coolGray-800 font-medium leading-6"
												htmlFor="email-input"
											>
												Email
											</label>
											<input
												className={`w-full py-2 px-3 appearance-none border ${
													formError ? "border-red-700" : "border-coolGray-200"
												} rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:ring-2 focus:ring-mto-orange focus:ring-opacity-50`}
												type="text"
												placeholder="(optional)"
												name="email"
												id="email-input"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
											/>
										</div>
										<div className="flex justify-between">
											<div className="w-1/2">
												<label
													className="w-1/2 pl-2 mb-2 text-coolGray-800 font-medium leading-6"
													htmlFor="name-input"
												>
													Name
												</label>
											</div>
											<div className="w-1/2 pl-2">
												<label
													className="w-1/2 mb-2 text-coolGray-800 font-medium leading-6"
													htmlFor="phone-input"
												>
													Phone number
												</label>
											</div>
										</div>
										<div className="flex space-x-1">
											<input
												className={`w-1/2 py-2 px-3 appearance-none border ${
													formError ? "border-red-700" : "border-coolGray-200"
												} rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:ring-2 focus:ring-mto-orange focus:ring-opacity-50`}
												type="text"
												placeholder="(optional)"
												name="name"
												id="name-input"
												value={name}
												onChange={(e) => setName(e.target.value)}
											/>
											<input
												className="w-1/2 py-2 px-3 appearance-none border border-coolGray-200 rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:ring-2 focus:ring-mto-orange focus:ring-opacity-50"
												type="tel"
												placeholder="(optional)"
												name="phone"
												id="phone-input"
												value={phone}
												onChange={(e) => setPhone(e.target.value)}
											/>
										</div>
									</div>
									<div className="mb-6">
										<label
											className="pl-2 block mb-2 text-coolGray-800 font-medium leading-6"
											htmlFor="message-input"
										>
											Message*
										</label>
										<textarea
											className={`block h-32 md:h-52 w-full py-2 px-3 appearance-none border ${
												formError ? "border-red-700" : "border-coolGray-200"
											} rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-mto-orange focus:ring-opacity-50 placeholder-coolGray-300 resize-none`}
											name="message"
											placeholder="Your message..."
											id="message-input"
											value={message}
											onChange={(e) => setMessage(e.target.value)}
										/>
										<p className="text-sm pb-1 pt-2 text-coolGray-500">
											Fields marked with a * are required
										</p>
									</div>
									<div className="pt-3">
										<button
											type="submit"
											value={"Submit"}
											className="w-full py-4 px-6 text-lg leading-6 text-coolGray-50 font-medium text-center bg-mto-blue hover:bg-mto-orange focus:ring-2 focus:ring-mto-orange focus:ring-opacity-50 rounded-md shadow-sm transition duration-150"
										>
											Send
										</button>
									</div>
								</form>
								{formSuccess ? (
									<div
										className="flex items-center p-4 mb-4 text-sm text-black rounded-lg bg-green-300"
										role="alert"
									>
										<svg
											className="flex-shrink-0 inline w-4 h-4 me-3"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
										</svg>
										<span className="sr-only">Info</span>
										<div>
											<span className="font-medium">Success!</span> We will get
											back to you as soon as possible.
										</div>
									</div>
								) : formWaiting ? (
									<div
										className="flex items-center p-4 mb-4 text-sm text-mto-blue rounded-lg bg-blue-100"
										role="alert"
									>
										<span className="flex">
											<p className="pr-4 pt-1">
												Submitting your form, please wait...
											</p>

											<div>
												<svg
													aria-hidden="true"
													className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
													viewBox="0 0 100 101"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
														fill="currentColor"
													/>
													<path
														d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
														fill="currentFill"
													/>
												</svg>
												<span className="sr-only">Loading...</span>
											</div>
										</span>
									</div>
								) : formError ? (
									<div
										className="flex items-center p-4 mb-4 text-sm text-red-600 rounded-lg bg-red-100"
										role="alert"
									>
										<span>{formError}</span>
									</div>
								) : null}
							</div>
						</div>
					</div>
				</div>
			</section>
		</GoogleReCaptchaProvider>
	);
}
