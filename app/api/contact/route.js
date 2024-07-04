import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { title, message } = await request.json();

    // Create a transporter using your Google Workspace email and app password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: title,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
  }
}
