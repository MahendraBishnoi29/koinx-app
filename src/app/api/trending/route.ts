import { TrendingCoin } from "@/types/api";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/search/trending",
      { next: { revalidate: 300 } }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch trending coins");
    }

    const data = await response.json();

    return NextResponse.json(data.coins as TrendingCoin[]);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch trending coins", code: 500 },
      { status: 500 }
    );
  }
}
