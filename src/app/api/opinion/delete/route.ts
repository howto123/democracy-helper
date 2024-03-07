import Opinion from "@/types/opinion";
import { OpinionType } from "@/types/opinionType";
import { NextResponse, type NextRequest } from "next/server"

export async function GET(req: NextRequest) {    
    return NextResponse.json("the delete route is online")
}

export async function POST(req: Request) {
    const data = await req.json();
    console.log("delete opinion called!")
    console.log(data);
    // do a server call (-> get a proper id) and return the freshly created object
    const mockOpinion: Opinion = {
        id: "444",
        text: "this needs to be a post request",
        type: OpinionType.IDontCare,
        propositionId: data.propositionId
    }
    return NextResponse.json(mockOpinion);
  }