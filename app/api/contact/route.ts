import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Handles POST requests from the Contact page form.
// Saves the message to the "Message" table in the database.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    // --- Basic validation ---
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in your name, email, and message." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { error: "Message is too long (max 2000 characters)." },
        { status: 400 }
      );
    }

    // --- Save to database ---
    await prisma.message.create({
      data: { name, email, message },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);

    // If DATABASE_URL isn't configured yet, give a friendly hint instead
    // of a generic server error.
    const hint = !process.env.DATABASE_URL
      ? "The database isn't connected yet. Add DATABASE_URL to your environment variables (see README.md)."
      : "Something went wrong while saving your message. Please try again later.";

    return NextResponse.json({ error: hint }, { status: 500 });
  }
}
