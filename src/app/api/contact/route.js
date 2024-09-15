import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer');

// Handles POST requests to /api
export async function POST(request) {
  const username = process.env.NEXT_PUBLIC_USERNAME;
  const password = process.env.NEXT_PUBLIC_PASSWORD;
  // const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
  const myEmail = 'tansenmatt@gmail.com'
  try {
    console.log("dealing with request");

    // Extract form data
    const formData = await request.formData(); // Change to `request.json()` for handling JSON request bodies
    const name = formData.name;
    const email = formData.email;
    const message = formData.message;


    // Create transporter object
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      secure: false,
      port: 587,
      auth: {
        user: process.env.NEXT_PUBLIC_USERNAME,
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
    });

    // Send email
    const mail = await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `Website activity from ${email}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });
    connectionTimeout: 10000,
    console.log('Mail sent: ', mail)

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'COULD NOT SEND MESSAGE' }, { status: 500 });
  }
}
