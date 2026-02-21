import { http, HttpResponse } from "msw";
import { EXPERIENCES } from "@/widgets/experience/model/data";

export const handlers = [
	http.get("/api/experience", async () => {
		// 실제 API 통신 느낌을 위한 딜레이
		await new Promise((resolve) => setTimeout(resolve, 600));
		return HttpResponse.json(EXPERIENCES);
	}),
];
