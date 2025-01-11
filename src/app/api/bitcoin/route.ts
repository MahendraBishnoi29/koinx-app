import { CryptoPrice } from "@/types/api";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true",
      { next: { revalidate: 60 } }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch bitcoin data");
    }

    const data = await response.json();

    return NextResponse.json(data.bitcoin as CryptoPrice);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch bitcoin data", code: 500 },
      { status: 500 }
    );
  }
}
