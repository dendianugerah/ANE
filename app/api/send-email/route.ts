import { NextResponse } from 'next/server';


// Fungsi handler POST
export async function POST(req: Request) {

  const nodemailer = require("nodemailer")
  const { from, to, subject, text } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // Variabel lingkungan
      pass: process.env.EMAIL_PASS, // Variabel lingkungan
    },
  });

  const mailOptions = {
    from,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email: ", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
