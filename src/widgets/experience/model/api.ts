import { API_ENDPOINTS } from "@/shared/api/endpoints";
import type { Experience } from "./types";

export async function fetchExperience(): Promise<Experience[]> {
	const res = await fetch(API_ENDPOINTS.experience);
	if (!res.ok) throw new Error("Failed to fetch experience");
	return res.json();
}
