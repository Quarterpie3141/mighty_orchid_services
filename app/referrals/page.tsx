"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
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
					<div className="md:max-w-4xl mb-12 mx-auto text-center">
						<span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-mto-orange font-medium uppercase rounded-full shadow-sm">
							REFERRAL FORM
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
					<div className="">
						<form className="max-w-md mx-auto">
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
										className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
										placeholder=""
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
									>
										<option>Prefer not to answer</option>
										<option>Female</option>
										<option>Male</option>
										<option>Other</option>
									</select>
								</div>
								<div className="mb-5">
									<label
										htmlFor="dob"
										className="block mb-2 text-sm font-medium text-mto-blue "
									>
										Date of Birth
									</label>
									<input
										type="date"
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
									Address
								</label>
								<input
									type="text"
									id="address"
									className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
									placeholder=""
									required
								/>
							</div>

							<div className="grid md:grid-cols-2 md:gap-6 mb-5">
								<div className="mb-5">
									<label
										htmlFor="suburb"
										className="block mb-2 text-sm font-medium text-mto-blue "
									>
										Suburb
									</label>
									<input
										type="text"
										id="suburb"
										className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
										placeholder=""
										required
									/>
								</div>
								<div className="grid md:grid-cols-2 md:gap-6">
									<div className="mb-5">
										<label
											htmlFor="postcode"
											className="block mb-2 text-sm font-medium text-mto-blue "
										>
											Postcode
										</label>
										<input
											type="text"
											id="postcode"
											className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
											placeholder=""
											required
										/>
									</div>
									<div className="mb-5">
										<label
											htmlFor="state"
											className="block mb-2 text-sm font-medium text-mto-blue "
										>
											State
										</label>
										<input
											type="text"
											id="state"
											className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
											placeholder=""
											required
										/>
									</div>
								</div>
							</div>

							<div className="grid md:grid-cols-2 md:gap-6">
								<div className="mb-5">
									<label
										htmlFor="phonenumber"
										className="block mb-2 text-sm font-medium text-mto-blue "
									>
										Phone Number
									</label>
									<input
										type="text"
										id="phonenumber"
										className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
										placeholder=""
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
										className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
										placeholder=""
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
										className="bg-gray-50 border border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5 "
									>
										<option>I don't know</option>
										<option>Self Managed</option>
										<option>Plan Managed</option>
										<option>NDIS Managed</option>
									</select>
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
													className="bg-gray-50 border-2 border-gray-300 text-mto-blue text-sm rounded-lg focus:ring-mto-orange focus:border-mto-orange block w-full p-2.5"
													placeholder=""
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
													Organisation
												</label>
												<input
													type="text"
													id="lastname"
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
										<div className="grid md:grid-cols-2 md:gap-6 mb-5">
											<div>
												<label
													htmlFor="gender"
													className="block mb-2 text-sm font-medium text-mto-blue "
												>
													Plan start date:
												</label>
												<input
													type="date"
													id="lastname"
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
													Plan end date:
												</label>
												<input
													type="date"
													id="dob"
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

								<div className="mb-5">
									<label
										htmlFor="message"
										className="block mb-2 text-sm font-medium text-mto-blue"
									>
										Primary Disability
									</label>
									<textarea
										id="message"
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
										rows={2}
										className="block p-2.5 w-full text-sm text-mto-blue bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-mto-orange focus:border-mto-orange"
									/>
								</div>
								<div className="mb-5">
									<label
										htmlFor="message"
										className="block mb-2 text-sm font-medium text-mto-blue"
									>
										Referral reason
									</label>
									<textarea
										id="message"
										rows={4}
										className="block p-2.5 w-full text-sm text-mto-blue bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-mto-orange focus:border-mto-orange"
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
				</div>
			</section>
			{/* Footer */}
			<Footer />
		</GoogleReCaptchaProvider>
	);
}
