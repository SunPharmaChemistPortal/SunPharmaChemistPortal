import { connectToDatabase } from "@/lib/dbConnection";
import { formInput } from "@/models/formInput";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    try {
        const body = await request.json();
        // console.log("Received form data: ", body);
        // Destructure form values
        const { medical_name, gst_numbers, dl_numbers, address } = body;
        await connectToDatabase();
        const newFormIntput = new formInput({
            medical_name,
            gst_numbers,
            dl_numbers,
            address,
        });
        await newFormIntput.save()
        return NextResponse.json(newFormIntput, {status: 201})
    }catch(e){
        console.log(e)
    }
}