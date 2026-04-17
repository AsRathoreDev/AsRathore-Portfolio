import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const apiKey = process.env.RESEND_API_KEY;
    const emailTo = process.env.EMAIL_TO;

    if (!apiKey) {
      throw new Error("Missing RESEND_API_KEY");
    }

    const resend = new Resend(apiKey);

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: emailTo as string,
      subject: "New Message From Portfolio",
      replyTo: email,
      html: `
        <h2>New Portfolio Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true, data });

  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error });
  }
}