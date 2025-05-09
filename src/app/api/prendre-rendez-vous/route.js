
import { EmailTemplate } from "@/components/emailTemplateResend/email-template-rendez-vous";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone,service,date, comment} = body;
    const data = await resend.emails.send({
      from: `${fullName}<onboarding@clinique-chifa-marrakech.com>`,
      to: "contact@clinique-chifa-marrakech.com",
      subject: 'Nouvelle demande de rendez-vous',
      react: EmailTemplate({
        fullName: fullName,
        comment: comment,
        email: email,
        Phone: phone,
        service: service,
        date: date,
       
      }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
