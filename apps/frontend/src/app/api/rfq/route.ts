export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let data: Record<string, unknown> = {};
    if (contentType.includes("application/json")) {
      data = await request.json();
    } else {
      const formData = await request.formData();
      data = Object.fromEntries(formData.entries());
    }
    console.log("RFQ Lead:", data);
    return Response.json({ success: true, message: "Inquiry submitted." });
  } catch {
    return Response.json({ success: false, message: "Submit failed." }, { status: 500 });
  }
}
