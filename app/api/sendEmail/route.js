import { Resend } from 'resend';
const resendMail = new Resend("re_Amkp6Fyf_5oTA3deHiDnE2nX1aLWBr4hm");
import { NextResponse } from 'next/server';
import { EmailTemplate } from '@/lib/EmailTemplate';

export async function POST(request) {
    const { name, email, projectIdea } = await request.json();

    try {
        const data = await resendMail.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['shaheeraamir.me@gmail.com'],
            subject: `New Project Idea from ${name}`,
            react: EmailTemplate({
                name: name,
                email: email,
                projectIdea: projectIdea,
            }),
        });

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: 500 });
    }
}
