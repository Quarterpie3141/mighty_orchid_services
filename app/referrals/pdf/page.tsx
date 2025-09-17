"use client";
import { useEffect, useState } from "react";
import AutoGrowingTextarea from "./input";
export default function RefferralsPDF() {
	const [formData, setFormData] = useState<Record<string, string>>();
	useEffect(() => {
		// Parse query parameters from the URL
		const query = new URLSearchParams(window.location.search);
		const data: Record<string, string> = {};

		// Iterate through query parameters and populate the data object
		query.forEach((value, key) => {
			data[key] = value;
		});

		// Set the parsed data to the state
		setFormData(data);
	}, []);
	if (formData) {
		return (
			<section
				className="bg-white w-[28cm] mx-auto my-auto "
				id="referral-form"
				style={{ pageBreakAfter: "always", maxWidth: "28cm" }}
			>
				<div className="container m-auto p-4">
					<div className="flex justify-between">
						<h2 className="text-3xl font-semibold text-mto-blue mb-3">
							MTOS Referrals Form
						</h2>
						<img
							src="https://mtos.com.au/branding/logo-horizontal.png"
							alt="logo"
							className=" w-44 rounded-lg mb-4"
						/>
					</div>
					<hr className="mb-5 border-mto-blue" />
					<br />

					<form className="space-y-8">
						{/* Participant Details */}
						<div>
							<h2 className="text-xl font-semibold text-mto-blue mb-5">
								Participant Details
							</h2>

							<div className="grid grid-cols-2 gap-4 mb-16">
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										First Name:
									</span>
									<AutoGrowingTextarea value={formData.a_firstName} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										Last Name:
									</span>
									<AutoGrowingTextarea value={formData.a_lastName} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										Gender:
									</span>
									<AutoGrowingTextarea value={formData.a_gender} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										Date of Birth:
									</span>
									<AutoGrowingTextarea value={formData.a_dob} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										Address:
									</span>
									<AutoGrowingTextarea value={formData.a_address} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										Suburb:
									</span>
									<AutoGrowingTextarea value={formData.a_suburb} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										Postcode:
									</span>
									<AutoGrowingTextarea value={formData.a_postcode} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										State:
									</span>
									<AutoGrowingTextarea value={formData.a_state} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										Phone Number:
									</span>
									<AutoGrowingTextarea value={formData.a_phone} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										Email Address:
									</span>
									<AutoGrowingTextarea value={formData.a_email} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										Preferred Method of Communication:
									</span>
									<AutoGrowingTextarea value={formData.a_contact} />
								</div>
							</div>
						</div>

						{/* NDIS Details */}
						<div>
							<h2 className="text-xl font-semibold text-mto-blue mb-5">
								NDIS Details:
							</h2>
							<div className="grid grid-cols-2 gap-4 mb-16">
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										NDIS Number:
									</span>
									<AutoGrowingTextarea value={formData.a_ndisNumber} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										NDIS Funding Type:
									</span>
									<AutoGrowingTextarea value={formData.a_fundingType} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										Primary Disability:
									</span>
									<AutoGrowingTextarea value={formData.a_primaryDisability} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										Secondary Disability:
									</span>
									<AutoGrowingTextarea value={formData.a_secondaryDisability} />
								</div>
								<div className="col-span-2">
									<span className="block text-sm font-medium text-mto-blue">
										Referral Reason:
									</span>
									<AutoGrowingTextarea value={formData.a_referralReason} />
								</div>
							</div>
						</div>

						{/* Conditional Sections (Plan Manager/Representative) */}
						<div>
							<h2 className="text-xl font-semibold text-mto-blue mb-3">
								Plan Manager/Plan Nominee Details
							</h2>

							<div className="grid grid-cols-2 gap-4 mb-16">
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										First Name:
									</span>
									<AutoGrowingTextarea value={formData.b_firstName} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										Last Name:
									</span>
									<AutoGrowingTextarea value={formData.b_lastName} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										Organisation:
									</span>
									<AutoGrowingTextarea value={formData.b_organisation} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										Contact Number:
									</span>
									<AutoGrowingTextarea value={formData.b_phoneNumber} />
								</div>
								<div className="col-span-2">
									<span className="block text-sm font-medium text-mto-blue">
										Email:
									</span>
									<AutoGrowingTextarea value={formData.b_email} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										Plan Start Date:
									</span>
									<AutoGrowingTextarea value={formData.b_planStartDate} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										Plan End Date:
									</span>
									<AutoGrowingTextarea value={formData.b_planEndDate} />
								</div>
							</div>
						</div>

						<div>
							<h2 className="text-xl font-semibold text-mto-blue mb-3">
								Representative Details
							</h2>
							<div className="grid grid-cols-2 gap-4 mb-16">
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										First Name:
									</span>
									<AutoGrowingTextarea value={formData.c_firstName} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										Last Name:
									</span>
									<AutoGrowingTextarea value={formData.c_lastName} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										Relationship to Client:
									</span>
									<AutoGrowingTextarea value={formData.c_relationship} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										Contact Number:
									</span>
									<AutoGrowingTextarea value={formData.c_phoneNumber} />
								</div>
								<div className="col-span-2">
									<span className="block text-sm font-medium text-mto-blue">
										Email:
									</span>
									<AutoGrowingTextarea value={formData.c_email} />
								</div>
							</div>
						</div>

						{/* Referrer Details */}
						<div>
							<h2 className="text-xl font-semibold text-mto-blue mb-3">
								Referrer Details
							</h2>
							<div className="grid grid-cols-2 gap-4 mb-16">
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										First Name:
									</span>
									<AutoGrowingTextarea value={formData.d_firstName} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										Last Name:
									</span>
									<AutoGrowingTextarea value={formData.d_lastName} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										Organisation:
									</span>
									<AutoGrowingTextarea value={formData.d_organisation} />
								</div>
								<div>
									<span className="block text-sm font-medium text-mto-blue">
										Phone Number:
									</span>
									<AutoGrowingTextarea value={formData.d_phoneNumber} />
								</div>
								<div className="col-span-2">
									<span className="block text-sm font-medium text-mto-blue">
										Email Address:
									</span>
									<AutoGrowingTextarea value={formData.d_email} />
								</div>
							</div>
						</div>
					</form>
				</div>
			</section>
		);
	}
}
