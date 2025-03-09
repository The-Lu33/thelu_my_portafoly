// filepath: /c:/Users/thelu/repos/thelu_my_portafoly/src/pages/api/mail/index.ts
import { sendEmail } from "@/src/actions/index.ts";
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    console.log(body);
    await sendEmail(body); 
    return new Response(JSON.stringify({ success: true, data: "mail" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error: any) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500, 
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}