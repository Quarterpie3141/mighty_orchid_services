"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Footer, Header } from "../components";
import ReferralForm from "./form";

export default function Refferrals() {
	return (
		<GoogleReCaptchaProvider reCaptchaKey="6LfVA-oqAAAAAPb9xgUrF4ZR_SX5wdIjCCCDxrMI">
			{/* Header */}
			<Header />
			<ReferralForm />
			{/* Footer */}
			<Footer />
		</GoogleReCaptchaProvider>
	);
}
