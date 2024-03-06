import Opinion from "@/types/opinion";
import { NextRequest, NextResponse } from "next/server";
import { opinionsSample } from "@/data/opinionsSample";
export async function GET(req: NextRequest) {
    const opinions = opinionsSample;
    return NextResponse.json({ opinions: opinions });
}