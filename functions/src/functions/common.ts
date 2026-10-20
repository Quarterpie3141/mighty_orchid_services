const cors = require("cors");
const Mailjet = require("node-mailjet");

// Values come from functions/.env, which the Firebase CLI loads automatically
// for both the emulator and deployed functions.
function requireEnv(name: string): string {
	const value = process.env[name];
	if (!value) {
		throw new Error(`Missing required environment variable: ${name}`);
	}
	return value;
}

// Initialize CORS middleware
export const corsHandler = cors({ origin: true });

// Initialize Mailjet instance
export const mailjet = Mailjet.apiConnect(
	requireEnv("MAILJET_API_KEY"),
	requireEnv("MAILJET_SECRET_KEY"),
);

export const API_KEY = requireEnv("API_KEY");
