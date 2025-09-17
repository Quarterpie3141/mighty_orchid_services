import axios from "axios";
import * as functions from "firebase-functions/v2";
import { corsHandler } from "./common";
const API_KEY =
	"";
export const sendWebPage = functions.https.onRequest((request, response) => {
	corsHandler(request, response, () => {
		const secret = "" as string;

		const captchaResponse = request.body.token;
		const remoteip = request.ip;

		async function verfiySend() {
			const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${captchaResponse}&remoteip=${remoteip}`;

			try {
				const reCaptchaResponse = await fetch(verifyUrl, { method: "POST" });

				const recaptchaData = await reCaptchaResponse.json();
				if (recaptchaData.success && recaptchaData.score > 0.5) {
					const status = await callAPI();
					if (status === 200) {
						response
							.status(200)
							.json({ message: "Form submitted successfully!" });
					} else {
						response
							.status(500)
							.json({ message: "Form submitted successfully!" });
					}
				} else {
					response
						.status(401)
						.json({ message: "reCAPTCHA verification failed." });
				}
			} catch (error) {
				response
					.status(500)
					.json({ message: "Error during reCAPTCHA verification.", error });
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
				console.error("Error calling Express API:", error);
				return 500;
			}
		}

		verfiySend();
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
