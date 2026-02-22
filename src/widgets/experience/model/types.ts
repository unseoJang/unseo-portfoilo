export type Project = {
	name: string;
	period: string;
	client: string;
	tech: string[];
	url?: string;
	logo?: string;
	description?: string;
	highlights?: string[];
};

export type Experience = {
	company: string;
	companyUrl?: string;
	period: string;
	role: string;
	tasks: string[];
	projects?: Project[];
};
