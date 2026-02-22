import { NextResponse } from "next/server"
import { EXPERIENCES } from "@/widgets/experience/model/data"

export async function GET() {
	return NextResponse.json(EXPERIENCES)
}
