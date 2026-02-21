export const experienceKeys = {
	all: ["experience"] as const,
	list: () => [...experienceKeys.all, "list"] as const,
};
