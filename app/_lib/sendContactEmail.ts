import sgMail from "@sendgrid/mail";
import { ContactFormData } from "../_types/contactFormData.type";

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

async function sendContactEmail({
  email,
  firstName,
  lastName,
  message,
}: ContactFormData) {
  // configure email
  const mailOptions = {
    to: process.env.EMAIL_SENDTO!,
    from: process.env.EMAIL_FROM!,
    replyTo: email,
    subject: `New message from ${firstName} ${lastName} <${email}>`,
    text: `------------- NAME & EMAIL --------------\n${firstName} ${lastName} <${email}>\n\n---------------- MESSAGE ----------------\n${message}`,
  };

  // send email
  await sgMail.send(mailOptions);
}

export default sendContactEmail;
