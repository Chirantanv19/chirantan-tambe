import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { z } from 'zod';

// 1. Force dynamic execution to prevent Vercel from caching the response
export const dynamic = 'force-dynamic';
export const maxDuration = 30; // Extend timeout to 30s for slow email handshakes

const ContactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(10),
});

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        console.error("DEBUG: Missing RESEND_API_KEY in Environment Variables");
        return NextResponse.json({ error: "API Key not configured" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    try {
        const body = await request.json();
        const result = ContactSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
        }

        const { name, email, message } = result.data;

        // 2. Capture the response from Resend to verify delivery
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: [process.env.PERSONAL_EMAIL || ''],
            replyTo: email, // High-end touch: allows you to reply directly to the sender
            subject: `🚀 New Message from ${name}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #8b5cf6;">New Portfolio Inquiry</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 5px;">
                        <strong>Message:</strong><br/>
                        ${message.replace(/\n/g, '<br/>')}
                    </div>
                </div>
            `,
        });

        // 3. Check for Resend-specific errors (even if the fetch technically "succeeded")
        if (error) {
            console.error("DEBUG: Resend API Error:", error);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, messageId: data?.id });

    } catch (error: any) {
        console.error("DEBUG: Server Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error", details: error.message },
            { status: 500 }
        );
    }
}