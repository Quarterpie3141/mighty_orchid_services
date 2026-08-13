import axios from "axios";
import * as functions from "firebase-functions/v2";
import { API_KEY, corsHandler } from "./common";

export const sendWebPage = functions.https.onRequest((request, response) => {
	corsHandler(request, response, () => {
		async function send() {
			try {
				const status = await callAPI();
				if (status === 200) {
					response
						.status(200)
						.json({ message: "Form submitted successfully!" });
				} else {
					response.status(500).json({ message: "Form submission failed." });
				}
			} catch (error) {
				response
					.status(500)
					.json({ message: "Error during form submission.", error });
				console.error(error);
			}
		}

		async function callAPI(): Promise<number> {
			try {
				// Define the URL of your Express API endpoint

				//small key names to lower chars in query url
				const data = {
					a: request.body.participantInfo,
					b: request.body.planManagerInfo,
					c: request.body.representativeInfo,
					d: request.body.referrerInfo,
				};

				const flattenedData = flattenObject(data);

				const expressApiUrl = `https://api.mtos.com.au/sendWebPage?key=${API_KEY}`;

				// Send a request to your Express API
				const response = await axios.post(expressApiUrl, flattenedData);

				console.log("Request to Express API completed", response.data);
				if (response.status === 200) {
					return 200;
				}
				return 500;
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
});

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
