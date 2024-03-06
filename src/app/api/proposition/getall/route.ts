import { propositionsSample } from "@/data/propositionsSample";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const propositions = propositionsSample;
    return NextResponse.json({ propositions: propositions });
}