import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_EMAIL_HOST as string,
  port: parseInt(process.env.SMTP_EMAIL_PORT as string),
  secure: false,
  auth: {
    user: process.env.SMTP_EMAIL_USER as string,
    pass: process.env.SMTP_EMAIL_PASS as string,
  },
});

export default transporter;
