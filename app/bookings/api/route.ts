export async function GET() {
  const response = await fetch(
    "https://hackathon.mesh-dev.ucl.ac.uk/eatery-api-producer/v0.1/booking",
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  return Response.json(data?.response?.booking_collection?.booking || null)
}