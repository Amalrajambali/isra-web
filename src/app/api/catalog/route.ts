import { NextResponse } from "next/server";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { parseGoogleSheet } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export async function GET() {
  const sheetId = process.env.GOOGLE_SHEET_ID || process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;
  const sheetGid = process.env.GOOGLE_SHEET_GID || process.env.NEXT_PUBLIC_GOOGLE_SHEET_GID || "0";

  if (!sheetId) {
    return NextResponse.json(
      PlaceHolderImages.filter((item) => item.id.startsWith("catalog-")),
      { headers: { "Cache-Control": "no-store" } }
    );
  }

  try {
    const response = await fetch(
      `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${sheetGid}`,
      { cache: "no-store" }
    );

    if (!response.ok) throw new Error("Google Sheet request failed");

    return NextResponse.json(parseGoogleSheet(await response.text()), {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json(
      PlaceHolderImages.filter((item) => item.id.startsWith("catalog-")),
      { headers: { "Cache-Control": "no-store" } }
    );
  }
}
