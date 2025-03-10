const cors = require("cors");
const Mailjet = require("node-mailjet");

// Initialize CORS middleware
export const corsHandler = cors({ origin: true });

// Initialize Mailjet instance
export const mailjet = Mailjet.apiConnect(
	"",
	"",
);
