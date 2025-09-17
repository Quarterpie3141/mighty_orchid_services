import * as functions from "firebase-functions/v2";
import { corsHandler, mailjet } from "./common";

export const sendMailContact = functions.https.onRequest(
	(request, response) => {
		corsHandler(request, response, () => {
			const secret = "" as string;
			const now = new Date();

			const senderEmail = request.body.email;
			const captchaResponse = request.body.token;
			const message = request.body.message;
			const phoneNumber = request.body.phone;
			const name = request.body.name;
			const remoteip = request.ip;

			async function verfiySend() {
				const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${captchaResponse}&remoteip=${remoteip}`;
				try {
					const reCaptchaResponse = await fetch(verifyUrl, { method: "POST" });

					const recaptchaData = await reCaptchaResponse.json();

					if (recaptchaData.success && recaptchaData.score > 0.5) {
						await deliverEmail();
						response
							.status(200)
							.json({ message: "Form submitted successfully!" });
					} else {
						console.error(`recaptcha error: ${reCaptchaResponse}`);
						response.status(400).json({
							message: `reCAPTCHA verification failed: ${reCaptchaResponse}`,
						});
					}
				} catch (error) {
					console.error(`Error during reCAPTCHA verificatin ${error}`);
					response
						.status(500)
						.json({ message: "Error during reCAPTCHA verification.", error });
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
								Subject: `New Inquiry from ${name} ${now.getDate()}/${now.getMonth() + 1}`,
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
                                        <p>You have received a new inquiry from <strong>${name}</strong>.</p>
                                        <p>
                                            Contact email: <strong>${senderEmail}</strong><br>
                                            Phone Number: <strong>${phoneNumber}</strong>
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

			verfiySend();
		});
	},
);
