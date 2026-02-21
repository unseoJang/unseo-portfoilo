const EXPERIENCE = "experience" as const;
const LIST = "list" as const;

export const experienceKeys = {
	all: [EXPERIENCE] as const,
	list: () => [...experienceKeys.all, LIST] as const,
};
