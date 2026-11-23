import * as functions from "firebase-functions/v2";
import { corsHandler, mailjet } from "./common";

export const sendMailContact = functions.https.onRequest(
	(request, response) => {
		corsHandler(request, response, () => {
			const now = new Date();

			const senderEmail = request.body?.email;
			const message = request.body?.message;
			const phoneNumber = request.body?.phone;
			const name = request.body?.name;
			// A submission with no message did not come from our form: the form
			// requires a message before it will send. Name, email and phone stay
			// optional, so people can still give feedback anonymously.
			if (typeof message !== "string" || message.trim() === "") {
				response.status(400).json({ message: "A message is required." });
				return;
			}

			// Anonymous submissions arrive with these fields blank. Show something
			// readable instead of leaving a gap in the email.
			const displayName =
				typeof name === "string" && name.trim() !== ""
					? name.trim()
					: "Anonymous";
			const displayEmail =
				typeof senderEmail === "string" && senderEmail.trim() !== ""
					? senderEmail.trim()
					: "Not provided";
			const displayPhone =
				typeof phoneNumber === "string" && phoneNumber.trim() !== ""
					? phoneNumber.trim()
					: "Not provided";

			async function send() {
				try {
					await deliverEmail();
					response
						.status(200)
						.json({ message: "Form submitted successfully!" });
				} catch (error) {
					console.error(`Error during form submission ${error}`);
					response
						.status(500)
						.json({ message: "Error during form submission.", error });
				}
			}

			async function deliverEmail() {
				try {
					const emailData = {
						Messages: [
							{
								From: {
									Email: "noreply@mtos.com.au",
									Name: "noreply",
								},
								To: [
									{
										Email: "info@mtos.com.au",
										Name: "Recipient",
									},
								],
								Subject: `New Inquiry from ${displayName} ${now.getDate()}/${now.getMonth() + 1}`,
								HTMLPart: `
                            <!DOCTYPE html>
                            <html>
                            <head>
                                <style>
                                    body {
                                        font-family: Arial, sans-serif;
                                        background-color: #f4f4f4;
                                        color: #333333;
                                        padding: 20px;
                                    }
                                    .container {
                                        background-color: #ffffff;
                                        width: 80%;
                                        margin: auto;
                                        padding: 20px;
                                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                                    }
                                    .header {
                                        font-size: 24px;
                                        color: #000000;
                                        padding-bottom: 10px;
                                        border-bottom: 1px solid #dddddd;
                                    }
                                    .content {
                                        margin-top: 20px;
                                    }
                                    .footer {
                                        margin-top: 20px;
                                        font-size: 12px;
                                        text-align: center;
                                        color: #888888;
                                    }
                                </style>
                            </head>
                            <body>
                                <div class="container">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td class="header" style="text-align: left;">
                                                New Web Inquiry Submitted
                                            </td>
                                            <td style="text-align: right;">
                                                <img
                                                 src="https://i.imgur.com/CG7ZNlF.png" 
                                                 height="80px" 
                                                 width="auto" 
                                                 style="border-radius: 15px;">
                                            </td>
                                        </tr>
                                    </table>              
                                    <div class="content">
                                        <p>Hello,</p>
                                        <p>You have received a new inquiry from <strong>${displayName}</strong>.</p>
                                        <p>
                                            Contact email: <strong>${displayEmail}</strong><br>
                                            Phone Number: <strong>${displayPhone}</strong>
                                        </p>
                                        <br>
                                        <p>Message:</p>
                                        <hr>
                                        <blockquote>${message}</blockquote>
                                    </div>
                                    <div class="footer">
                                        This is an automated response. Please do not reply directly to this email.
                                    </div>
                                </div>
                            </body>
                            </html>
                            `,
							},
						],
					};

					const result = await mailjet
						.post("send", { version: "v3.1" })
						.request(emailData);

					if (result.body.status === "success") {
						console.info("Email sent successfully");
					}
				} catch (error) {
					console.error("Error sending email:", error);
					response
						.status(500)
						.json({ message: `Error sending email. ${JSON.stringify(error)}` });
				}
			}

			send();
		});
	},
);
