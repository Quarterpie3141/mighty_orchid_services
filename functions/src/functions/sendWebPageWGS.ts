import axios from "axios";
import * as functions from "firebase-functions/v2";
import { API_KEY, corsHandler } from "./common";

export const sendNDISReferralForm = functions.https.onRequest(
	(request, response) => {
		corsHandler(request, response, () => {
			async function send() {
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
					// Log a plain-object summary: the Firebase logger drops entries it
					// cannot serialise, and an AxiosError is circular.
					console.error("Error calling Express API:", {
						code: axios.isAxiosError(error) ? error.code : undefined,
						message: error instanceof Error ? error.message : String(error),
						status: axios.isAxiosError(error)
							? error.response?.status
							: undefined,
						body: axios.isAxiosError(error)
							? JSON.stringify(error.response?.data)?.slice(0, 500)
							: undefined,
					});
					return 500;
				}
			}

			send();
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
