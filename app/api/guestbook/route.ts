import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/guestbook -> returns the most recent guestbook entries
export async function GET() {
  try {
    const entries = await prisma.guestbookEntry.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });
    return NextResponse.json({ entries });
  } catch (err) {
    console.error("Guestbook GET error:", err);

    const hint = !process.env.DATABASE_URL
      ? "The database isn't connected yet. Add DATABASE_URL to your environment variables (see README.md)."
      : "Could not load guestbook entries right now.";

    return NextResponse.json({ entries: [], error: hint }, { status: 200 });
  }
}

// POST /api/guestbook -> adds a new guestbook entry
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const note = String(body.note ?? "").trim();

    if (!name || !note) {
      return NextResponse.json(
        { error: "Please enter your name and a short note." },
        { status: 400 }
      );
    }

    if (name.length > 60 || note.length > 280) {
      return NextResponse.json(
        { error: "Name (max 60) or note (max 280) is too long." },
        { status: 400 }
      );
    }

    const entry = await prisma.guestbookEntry.create({
      data: { name, note },
    });

    return NextResponse.json({ entry });
  } catch (err) {
    console.error("Guestbook POST error:", err);

    const hint = !process.env.DATABASE_URL
      ? "The database isn't connected yet. Add DATABASE_URL to your environment variables (see README.md)."
      : "Something went wrong while saving your note. Please try again later.";

    return NextResponse.json({ error: hint }, { status: 500 });
  }
}
