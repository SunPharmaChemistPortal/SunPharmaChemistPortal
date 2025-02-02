import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Mimic a simple image and data processing request
  try {
    console.log("Received file request");
    const mockApiResponse = {
      medical_name: "Mock Pharmacy",
      gst_numbers: ["MockGST001", "MockGST002"],
      dl_numbers: ["MockDL001", "MockDL002"],
      address: "Mock Street, Mock City, 400001",
    };
    return NextResponse.json(mockApiResponse, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error processing file" }, { status: 500 });
  }
}
