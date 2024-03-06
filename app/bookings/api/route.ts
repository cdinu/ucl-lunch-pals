import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET() {
  const response = await fetch(
    "https://hackathon.mesh-dev.ucl.ac.uk/eatery-api-producer/v0.1/booking",
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 },
    }
  );
  const data = await response.json();
  return Response.json(data?.response?.booking_collection?.booking || null)
}

export async function POST(req: NextRequest,res: NextResponse) {
  const data = await req.json()

  const response = await fetch(
    "https://hackathon.mesh-dev.ucl.ac.uk/eatery-api-producer/v0.1/booking",
    { 
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eatery_id: data.eatery_id,
        person_id: data.person_id,
        timestamp: new Date().toISOString(),
      }),
    }
  );

  return NextResponse.json({ok: 1})
}