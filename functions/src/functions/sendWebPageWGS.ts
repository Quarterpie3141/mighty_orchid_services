import axios from "axios";
import * as functions from "firebase-functions/v2";
import { corsHandler, API_KEY } from "./common";

export const sendNDISReferralForm = functions.https.onRequest(
	(request, response) => {
		corsHandler(request, response, () => {
			//const captchaResponse = request.body.token;
			//const remoteip = request.ip;

			async function verifyAndSend() {
				// const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${captchaResponse}&remoteip=${remoteip}`;
				// try {
				//   const reCaptchaResponse = await fetch(verifyUrl, { method: "POST" });
				//   const recaptchaData = await reCaptchaResponse.json();
				//   if (recaptchaData.success && recaptchaData.score > 0.5) {
				//     const status = await callAPI();
				//     if (status === 200) {
				//       response.status(200).json({ message: "Form submitted successfully!" });
				//     } else {
				//       response.status(500).json({ message: "Form submission failed." });
				//     }
				//   } else {
				//     response
				//       .status(401)
				//       .json({ message: "reCAPTCHA verification failed." });
				//   }
				// } catch (error) {
				//   console.error(error);
				//   response.status(500).json({ message: "Error during reCAPTCHA verification.", error });
				// }

				// TO DO IMPLEMENT CAPTCHA
				const status = await callAPI();
				if (status === 200) {
					response
						.status(200)
						.json({ message: "Form submitted successfully!" });
				} else {
					response.status(500).json({ message: "Form submission failed." });
				}
			}

			async function callAPI(): Promise<number> {
				try {
					// Build the data structure using short keys (a–f). Each prefix
					// corresponds to a section of the form. Flattening will produce
					// keys like a_firstName, e_serviceType etc.
					const data = {
						a: request.body.participantInfo,
						b: request.body.planManagerInfo,
						c: request.body.emergencyContact,
						d: request.body.referrerInfo,
						e: request.body.serviceRequest,
						f: request.body.consentInfo,
					} as Record<string, any>;

					const flattenedData = flattenObject(data);
					// Use a dedicated endpoint for the new referral form. Adjust the path
					// as needed on your Express API.
					const expressApiUrl = `https://api.mtos.com.au/sendReferralForm?key=${API_KEY}`;
					const apiResponse = await axios.post(expressApiUrl, flattenedData);
					console.log("Request to Express API completed", apiResponse.data);
					return apiResponse.status === 200 ? 200 : 500;
				} catch (error) {
					console.error("Error calling Express API:", error);
					return 500;
				}
			}

			verifyAndSend();
		});
	},
);

function flattenObject(
	ob: Record<string, string>,
	prefix = "",
): Record<string, string> {
	const result: Record<string, string> = {};

	for (const key in ob) {
		if (Object.prototype.hasOwnProperty.call(ob, key)) {
			const newKey = prefix ? `${prefix}_${key}` : key;
			const value = ob[key];

			if (
				typeof value === "object" &&
				value !== null &&
				!Array.isArray(value)
			) {
				Object.assign(result, flattenObject(value, newKey));
			} else {
				result[newKey] = value;
			}
		}
	}

	return result;
}
