import Proposition from '@/types/proposition';
import { NextResponse, type NextRequest } from 'next/server'

export async function GET(req: NextRequest) {    
    return NextResponse.json("the create route is online")
}

export async function POST(req: Request) {
    const data = await req.json();
    console.log(data);
    // do a server call (-> get a proper id) and return the freshly created object
    const mockProposition: Proposition = {
        id: '444',
        text: 'this needs to be a post request'
    }
    return NextResponse.json(mockProposition);
  }