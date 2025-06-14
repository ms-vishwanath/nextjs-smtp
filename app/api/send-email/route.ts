import transporter from "@/util/transport";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();
  try {
    const { emails, subject, text, html } = body;
    await transporter.sendMail({
      from: process.env.SMTP_HOST as string,
      to: emails,
      subject: subject,
      text: text,
      html: html,
    });

    return NextResponse.json(
      {
        message: "Success",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error,
      },
      {
        status: 500,
      }
    );
  }
};
