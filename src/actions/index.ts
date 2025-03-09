// filepath: /c:/Users/thelu/repos/thelu_my_portafoly/src/actions/index.ts
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function sendEmail(body: { fullName: string; email: string; message: string }) {
  const { fullName, email, message } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['luiseducol13@gmail.com'],
      subject: `New message from ${fullName}`,
      html: `<p><strong>From:</strong> ${fullName} (${email})</p><p>${message}</p>`,
    });

    if (error) {
      console.error("Error sending email:", error);
      throw new Error(error.message);
    }

    console.log("Email sent successfully:", data);
    return data;
  } catch (error: any) {
    console.error("Error sending email:", error);
    throw new Error(error.message);
  }
}