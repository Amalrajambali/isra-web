import { PlaceHolderImages, type ImagePlaceholder } from "@/app/lib/placeholder-images";

const SHEET_ID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;
const SHEET_GID = process.env.NEXT_PUBLIC_GOOGLE_SHEET_GID || "0";

function parseCsvRow(row: string) {
  const values: string[] = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < row.length; index += 1) {
    const character = row[index];
    const nextCharacter = row[index + 1];

    if (character === '"' && quoted && nextCharacter === '"') {
      value += '"';
      index += 1;
    } else if (character === '"') {
      quoted = !quoted;
    } else if (character === "," && !quoted) {
      values.push(value.trim());
      value = "";
    } else {
      value += character;
    }
  }

  values.push(value.trim());
  return values;
}

function parseGoogleSheet(csv: string): ImagePlaceholder[] {
  const rows = csv.replace(/^\uFEFF/, "").split(/\r?\n/).filter(Boolean).map(parseCsvRow);
  if (rows.length < 2) return [];

  const headers = rows[0].map((header) => header.toLowerCase());
  const getValue = (row: string[], name: string) => {
    const index = headers.indexOf(name);
    return index === -1 ? "" : row[index] || "";
  };

  return rows.slice(1).map((row, index) => {
    const price = getValue(row, "price");
    return {
      id: getValue(row, "id") || `catalog-sheet-${index + 1}`,
      description: getValue(row, "description") || "ISRA Ethnic design",
      imageUrl: normalizeDriveImageUrl(getValue(row, "imageurl")),
      imageHint: getValue(row, "imagehint") || "ethnic fashion",
      reelUrl: getValue(row, "reelurl") || undefined,
      price: price || null,
    };
  }).filter((item) => item.imageUrl || item.reelUrl);
}

export function normalizeDriveImageUrl(url: string) {
  const trimmedUrl = url.trim();
  if (!trimmedUrl) return "";

  const fileId = trimmedUrl.match(/\/d\/([a-zA-Z0-9_-]+)/)?.[1]
    || trimmedUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/)?.[1];

  return fileId
    ? `https://drive.google.com/uc?export=view&id=${fileId}`
    : trimmedUrl;
}

export async function getCatalogItems() {
  if (!SHEET_ID) return PlaceHolderImages.filter((item) => item.id.startsWith("catalog-"));

  const response = await fetch(
    `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${SHEET_GID}`,
    { cache: "no-store" }
  );

  if (!response.ok) throw new Error("Google Sheet could not be loaded");
  return parseGoogleSheet(await response.text());
}
