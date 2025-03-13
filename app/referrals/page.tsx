"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
	GoogleReCaptchaProvider,
	useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { Footer, Header } from "../components";

export default function ReferralForm() {
	const [hasManager, setHasManager] = useState(false);
	const handleHasManagerChange = () => {
		setHasManager(!hasManager);
	};

	const [hasRep, setHasRep] = useState(false);
	const handleHasRepChange = () => {
		setHasRep(!hasRep);
	};

	const [formWaiting, setFormWaiting] = useState(false);
	const [formError, setFormError] = useState<string | null>(null);
	const [formSuccess, setFormSuccess] = useState(false);

	// State variables for form fields
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [phone, setPhone] = useState("");

	const [participantInfo, setParticipantInfo] = useState({
		firstName: "",
		lastName: "",
		gender: "",
		dob: "",
		address: "",
		suburb: "",
		postcode: "",
		state: "",
		phone: "",
		email: "",
		contact: "",
		ndisNumber: "",
		fundingType: "",
		primaryDisability: "",
		secondaryDisability: "",
		referralReason: "",
	});
	const [planManagerInfo, setPlanManagerInfo] = useState({
		firstName: "",
		lastName: "",
		organisation: "",
		phoneNumber: "",
		email: "",
		planStartDate: "",
		planEndDate: ""
	});
	const [representativeInfo, setRepresentativeInfo] = useState({
		firstName: "",
		lastName: "",
		relationship: "",
		phoneNumber: "",
		email: ""
	});
	const handleParticipantChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>,
	) => {
		const { name, value } = e.target;

		setParticipantInfo((prevInfo) => ({
			...prevInfo,
			[name]: value,
		}));
	};
	const handlePlanManagerChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>,
	) => {
		const { name, value } = e.target;

		setPlanManagerInfo((prevInfo) => ({
			...prevInfo,
			[name]: value,
		}));
		console.log(participantInfo);
	};
	const handleRepresentativeChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>,
	) => {
		const { name, value } = e.target;

		setRepresentativeInfo((prevInfo) => ({
			...prevInfo,
			[name]: value,
		}));
		console.log(representativeInfo);
	};




	const { executeRecaptcha } = useGoogleReCaptcha();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setFormWaiting(true);
		setFormError(null);
		setFormSuccess(false);

		// Client-side validation
		if (!name || !email || !message) {
			setFormError("Please fill in all required fields.");
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
				"https://sendmailcontact-ejqhdbrtsq-uc.a.run.app",
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
		<GoogleReCaptchaProvider reCaptchaKey="6LfdUlkqAAAAAEKojQwPa5xKxSYkVRV-Jho82hi1">
			{/* Header */}
			<Header />
			<section
				className="py-52 md:py-58 bg-white w-auto"
				style={{
					backgroundImage: 'url("../bg-gradient.png")',
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
				id="referral-form"
			>
				<div className="container mx-auto m-12 w-auto">
					<div className="md:max-w-5xl mb-12 mx-auto text-center p-4">
						<span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-orange font-medium uppercase rounded-full shadow-sm">
							Referral Form
						</span>
						<h1 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
							Participant Referral Details
						</h1>
						<p className="text-lg md:text-xl text-coolGray-500 font-medium">
							Welcome! This form is designed to help new participants apply to
							receive support from MTOS. By filling it out, you’re taking the
							first step toward becoming part of our community, and we’re
							excited to learn more about how we can support you.
							<br />
							<br />
							Please complete the form with as much detail as possible so that
							we can understand your needs and guide you through the next steps.
							If you have any questions or need assistance at any point,
							<a
								className=" text-mto-blue hover:text-mto-orange transition"
								href="/#contact-form"
							>
								{" "}
								please don’t hesitate to reach out
							</a>
							, we’re here to make the process as easy and welcoming as
							possible.
						</p>
					</div>

					<form className="max-w-4xl mx-auto p-4">
						<div className="mb-2">
							<p className=" text-mto-blue text-xl">Participant details</p>
						</div>
						<hr className="" />
						<div className="grid md:grid-cols-2 md:gap-6">
							<div className="mb-5">
								<label
									htmlFor="firstname"
									className="block mb-2 text-sm font-medium text-mto-blue "
								>
									First Name
								</label>
								<input
									type="text"
									name="firstName"
									className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
									value={participantInfo.firstName}
									onChange={handleParticipantChange}
									required
								/>
							</div>
							<div className="mb-5">
								<label
									htmlFor="lastname"
									className="block mb-2 text-sm font-medium text-mto-blue "
								>
									Last Name
								</label>
								<input
									type="text"
									name="lastName"
									className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
									value={participantInfo.lastName}
									onChange={handleParticipantChange}
									required
								/>
							</div>
						</div>

						<div className="grid md:grid-cols-2 md:gap-6 mb-5">
							<div>
								<label
									htmlFor="gender"
									className="block mb-2 text-sm font-medium text-mto-blue "
								>
									Gender
								</label>
								<select
									id="gender"
									className="bg-gray-50 border border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5 "
									name="gender"
									value={participantInfo.gender}
									onChange={handleParticipantChange}
								>
									<option>Prefer not to answer</option>
									<option>Female</option>
									<option>Male</option>
									<option>Other</option>
								</select>
							</div>
							<div className="mb-5">
								<label
									className="block mb-2 text-sm font-medium text-mto-blue "
								>
									Date of Birth
								</label>
								<input
									type="date"
									name="dob"
									className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
									value={participantInfo.dob}
									onChange={handleParticipantChange}
									required
								/>
							</div>
						</div>

						<div className="mb-2">
							<label
								className="block mb-2 text-sm font-medium text-mto-blue "
							>
								Address
							</label>
							<input
								type="text"
								name="address"
								className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
								value={participantInfo.address}
								onChange={handleParticipantChange}
								required
							/>
						</div>

						<div className="grid md:grid-cols-2 md:gap-6 mb-5">
							<div className="mb-5">
								<label
									className="block mb-2 text-sm font-medium text-mto-blue "
								>
									Suburb
								</label>
								<input
									type="text"
									name="suburb"
									className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
									value={participantInfo.suburb}
									onChange={handleParticipantChange}
								/>
							</div>
							<div className="grid md:grid-cols-2 md:gap-6">
								<div className="mb-5">
									<label
										className="block mb-2 text-sm font-medium text-mto-blue "
									>
										Postcode
									</label>
									<input
										type="text"
										name="postcode"
										className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
										value={participantInfo.postcode}
										onChange={handleParticipantChange}
									/>
								</div>
								<div className="mb-5">
									<label
										className="block mb-2 text-sm font-medium text-mto-blue "
									>
										State
									</label>
									<input
										type="text"
										name="state"
										className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
										value={participantInfo.state}
										onChange={handleParticipantChange}
										required
									/>
								</div>
							</div>
						</div>

						<div className="grid md:grid-cols-2 md:gap-6">
							<div className="mb-5">
								<label  
									className="block mb-2 text-sm font-medium text-mto-blue "
								>
									Phone Number
								</label>
								<input
									type="text"
									id="phonenumber"
									name="phone"
									className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
									value={participantInfo.phone}
									onChange={handleParticipantChange}
									required
								/>
							</div>
							<div className="mb-5">
								<label
									htmlFor="emailaddress"
									className="block mb-2 text-sm font-medium text-mto-blue "
								>
									Email Address
								</label>
								<input
									type="text"
									id="emailaddress"
									name="email"
									className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
									placeholder=""
									value={participantInfo.email}
									onChange={handleParticipantChange}
									required
								/>
							</div>
						</div>

						<div className=" mb-5">
							<label
								htmlFor="methodofcommunication"
								className="block mb-2 text-sm font-medium text-mto-blue "
							>
								Preferred Method of Communication
							</label>
							<select
								id="methodofcommunication"
								name="contact"
								value={participantInfo.contact}
								onChange={handleParticipantChange}
								className="bg-gray-50 border border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5 "
							>
								<option>Email</option>
								<option>Phone</option>
								<option>SMS</option>
								<option>Mail</option>
							</select>
						</div>

						<div className="grid md:grid-cols-2 md:gap-6 mb-5">
							<div className="mb-5">
								<label
									htmlFor="ndisnumber"
									className="block mb-2 text-sm font-medium text-mto-blue "
								>
									NDIS Number
								</label>
								<input
									type="text"
									id="ndisnumber"
									name="ndisNumber"
									value={participantInfo.ndisNumber}
									onChange={handleParticipantChange}
									className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
									placeholder=""
									required
								/>
							</div>
							<div>
								<label
									htmlFor="ndisfundingtype"
									className="block mb-2 text-sm font-medium text-mto-blue "
								>
									NDIS Funding Type
								</label>
								<select
									id="ndisfundingtype"
									name="fundingType"
									value={participantInfo.fundingType}
									onChange={handleParticipantChange}
									className="bg-gray-50 border border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5 "
								>
									<option>I don't know</option>
									<option>Self Managed</option>
									<option>Plan Managed</option>
									<option>NDIS Managed</option>
								</select>
							</div>
							<div className="mb-5">
								<label
									htmlFor="message"
									className="block mb-2 text-sm font-medium text-mto-blue"
								>
									Primary Disability
								</label>
								<textarea
									id="message"
									name="primaryDisability"
									value={participantInfo.primaryDisability}
									onChange={handleParticipantChange}
									rows={2}
									className="block p-2.5 w-full text-sm text-mto-blue bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-mto-orange focus:border-mto-orange"
								/>
							</div>
							<div className="mb-5">
								<label
									htmlFor="message"
									className="block mb-2 text-sm font-medium text-mto-blue"
								>
									Secondary Disability
								</label>
								<textarea
									id="message"
									name="secondaryDisability"
									value={participantInfo.secondaryDisability}
									onChange={handleParticipantChange}
									rows={2}
									className="block p-2.5 w-full text-sm text-mto-blue bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-mto-orange focus:border-mto-orange"
								/>
							</div>
						</div>

						<div className="items-center mb-4">
							<div className="mb-5">
								<label
									htmlFor="message"
									className="block mb-2 text-sm font-medium text-mto-blue"
								>
									Referral reason
								</label>
								<textarea
									id="message"
									name="referralReason"
									value={participantInfo.referralReason}
									onChange={handleParticipantChange}
									rows={4}
									className="block p-2.5 w-full text-sm text-mto-blue bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-mto-orange focus:border-mto-orange"
								/>
							</div>
						</div>

						<div className="flex items-center mb-4">
							<input
								checked={hasManager}
								id="checkbox-1"
								type="checkbox"
								onChange={handleHasManagerChange}
								value=""
								className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label
								htmlFor="checkbox-1"
								className="ms-2 text-sm font-medium text-mto-blue"
							>
								I have a plan nominee or a plan manager.
							</label>
						</div>
						<AnimatePresence>
							{hasManager && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.3 }}
								>
									<hr />
									<div className="mb-2">
										<p className=" text-mto-blue text-xl">
											Plan Manager/Plan Nominee Details
										</p>
									</div>
									<div className="grid md:grid-cols-2 md:gap-6">
										<div className="mb-5">
											<label
												htmlFor="firstname"
												className="block mb-2 text-sm font-medium text-mto-blue "
											>
												First Name
											</label>
											<input
												type="text"
												id="firstname"
												name="firstName"
												value={planManagerInfo.firstName}
												onChange={handlePlanManagerChange}
												className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
												placeholder=""
												required
											/>
										</div>
										<div className="mb-5">
											<label
												htmlFor="lastname"
												className="block mb-2 text-sm font-medium text-mto-blue "
											>
												Last Name
											</label>
											<input
												type="text"
												id="lastname"
												name="lastName"
												className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
												placeholder=""
												value={planManagerInfo.lastName}
												onChange={handlePlanManagerChange}
												required
											/>
										</div>
									</div>
									<div className="grid md:grid-cols-2 md:gap-6 mb-5">
										<div>
											<label
												htmlFor="org"
												className="block mb-2 text-sm font-medium text-mto-blue "
											>
												Organisation
											</label>
											<input
												type="text"
												id="org"
												name="organisation "
												className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
												placeholder=""
												value={planManagerInfo.organisation}
												onChange={handlePlanManagerChange}
												required
											/>
										</div>
										<div className="mb-2">
											<label
												htmlFor="dob"
												className="block mb-2 text-sm font-medium text-mto-blue "
											>
												Contact Number
											</label>
											<input
												type="text"
												id="dob"
												className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
												placeholder=""
												name="phoneNumber"
												value={planManagerInfo.phoneNumber}
												onChange={handlePlanManagerChange}
												required
											/>
										</div>
									</div>
									<div className="mb-2">
										<label
											htmlFor="email"
											className="block mb-2 text-sm font-medium text-mto-blue "
										>
											Email
										</label>
										<input
											type="text"
											id="email"
											name="email"
											value={planManagerInfo.email}
											onChange={handlePlanManagerChange}
											className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
											placeholder=""
											required
										/>
									</div>
									<div className="grid md:grid-cols-2 md:gap-6 mb-5">
										<div>
											<label
												htmlFor="planStartDate"
												className="block mb-2 text-sm font-medium text-mto-blue "
											>
												Plan start date:
											</label>
											<input
												type="date"
												id="planStartDate"
												name="planStartDate"
												value={planManagerInfo.planStartDate}
												onChange={handlePlanManagerChange}
												className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
												placeholder=""
												required
											/>
										</div>
										<div className="mb-2">
											<label
												htmlFor="planEndDate"
												className="block mb-2 text-sm font-medium text-mto-blue "
											>
												Plan end date:
											</label>
											<input
												type="date"
												id="planEndDate"
												name="planEndDate"
												value={planManagerInfo.planEndDate}
												onChange={handlePlanManagerChange}
												className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
												placeholder=""
												required
											/>
										</div>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
						<div className="flex items-center mb-4">
							<input
								checked={hasRep}
								id="checkbox-1"
								type="checkbox"
								onChange={handleHasRepChange}
								value=""
								className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label
								htmlFor="checkbox-1"
								className="ms-2 text-sm font-medium text-mto-blue"
							>
								I have a representative.
							</label>
						</div>
						<AnimatePresence>
							{hasRep && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.3 }}
								>
									<hr />
									<div className="mb-2">
										<p className=" text-mto-blue text-xl">
											Representative Details
										</p>
									</div>
									<div className="grid md:grid-cols-2 md:gap-6">
										<div className="mb-5">
											<label
												htmlFor="firstname"
												className="block mb-2 text-sm font-medium text-mto-blue "
											>
												First Name
											</label>
											<input
												type="text"
												id="firstName"
												name="firstName"
												value={representativeInfo.firstName}
												onChange={handleRepresentativeChange}
												className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
												placeholder=""
												required
											/>
										</div>
										<div className="mb-5">
											<label
												htmlFor="lastname"
												className="block mb-2 text-sm font-medium text-mto-blue "
											>
												Last Name
											</label>
											<input
												type="text"
												id="lastname"
												name="lastName"
												value={representativeInfo.lastName}
												onChange={handleRepresentativeChange}
												className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
												placeholder=""
												required
											/>
										</div>
									</div>
									<div className="grid md:grid-cols-2 md:gap-6 mb-2">
										<div>
											<label
												htmlFor="gender"
												className="block mb-2 text-sm font-medium text-mto-blue "
											>
												Relationship to client
											</label>
											<input
												type="text"
												id="lastname"
												name="relationship"
												value={representativeInfo.relationship}
												onChange={handleRepresentativeChange}
												className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
												placeholder=""
												required
											/>
										</div>
										<div className="mb-2">
											<label
												htmlFor="dob"
												className="block mb-2 text-sm font-medium text-mto-blue "
											>
												Contact Number
											</label>
											<input
												type="text"
												id="dob"
												className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
												placeholder=""
												required
											/>
										</div>
									</div>
									<div className="mb-2">
										<label
											htmlFor="address"
											className="block mb-2 text-sm font-medium text-mto-blue "
										>
											Email
										</label>
										<input
											type="text"
											id="address"
											className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
											placeholder=""
											required
										/>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
						<hr className="mb-4" />
						<div className="mb-2">
							<p className=" text-mto-blue text-xl">Referrer Details</p>
						</div>

						<div className="grid md:grid-cols-2 md:gap-6">
							<div className="mb-2">
								<label
									htmlFor="firstname"
									className="block mb-2 text-sm font-medium text-mto-blue "
								>
									First Name
								</label>
								<input
									type="text"
									id="firstname"
									className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
									placeholder=""
									required
								/>
							</div>

							<div className="mb-2">
								<label
									htmlFor="lastname"
									className="block mb-2 text-sm font-medium text-mto-blue "
								>
									Last Name
								</label>
								<input
									type="text"
									id="lastname"
									className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
									placeholder=""
									required
								/>
							</div>

							<div className="mb-5">
								<label
									htmlFor="firstname"
									className="block mb-2 text-sm font-medium text-mto-blue "
								>
									Organisation
								</label>
								<input
									type="text"
									id="firstname"
									className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
									placeholder=""
									required
								/>
							</div>

							<div className="mb-5">
								<label
									htmlFor="lastname"
									className="block mb-2 text-sm font-medium text-mto-blue "
								>
									Phone Number
								</label>
								<input
									type="text"
									id="lastname"
									className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
									placeholder=""
									required
								/>
							</div>
						</div>

						<div className="mb-2">
							<div className="mb-5">
								<label
									htmlFor="address"
									className="block mb-2 text-sm font-medium text-mto-blue "
								>
									Email Address
								</label>
								<input
									type="text"
									id="address"
									className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
									placeholder=""
									required
								/>
							</div>
						</div>

						<button
							type="submit"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Submit
						</button>
					</form>
				</div>
			</section>
			{/* Footer */}
			<Footer />
		</GoogleReCaptchaProvider>
	);
}
