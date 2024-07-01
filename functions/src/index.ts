import * as functions from "firebase-functions/v2";
import * as nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config({path: "../.env"});

export const sendmail = functions.https.onRequest((request, response)=>{
  const secret = process.env.RECAPTCHA_PRIVATE_KEY as string;
  const now = new Date();
  const senderEmail = request.body.email;
  const captchaResponse = request.body["g-recaptcha-response"];
  const message = request.body.message;
  const phoneNumber = request.body.phone;
  const name = request.body.name;
  const remip = request.ip as string;
  /**
 * verify's the recaptcha and sends an email with the body parameters if its valid.
 * @return {null}
 */
  async function verfiySend() {
    const params = new URLSearchParams({
      secret: secret,
      response: captchaResponse,
      remoteip: remip,
    });

    await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      body: params,
    })
      .then((res) => res.json())
      .then((data) =>{
        console.log(data.success);
        if (data.success) {
          deliveremail()
            .then(() => {
              response.send("Success");
            })
            .catch((error) => {
              console.log(error);
              response.status(500).send("Error occurred" + error);
            });
        } else {
          response.status(500).send("SS Failure");
        }
      });
  }


  const transport = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.OUTLOOK_USER,
      pass: process.env.OUTLOOK_SECRET,
    },
  });

  /**
 * delivers an automated message using an external outlook account
 * @return {null}
 */
  async function deliveremail() {
    const info = await transport.sendMail({
      from: `noreply-mtos <${process.env.OUTLOOK_USER}>`,
      to: process.env.OUTLOOK_TARGET,
      subject: `New Inquiry from ${name}  ${now.getDate()}/${(now.getMonth() + 1)}`,
      html: `<!DOCTYPE html>
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
                          Contact email: <strong>${senderEmail}</strong>
                             Phone Number: <strong>${phoneNumber}</strong>
                          </p>
                          <br>
                          <p>Here is the message:</p>
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

    });
    console.log(info.messageId);
  }

  transport.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log(success);
      verfiySend();
    }
  });
});
