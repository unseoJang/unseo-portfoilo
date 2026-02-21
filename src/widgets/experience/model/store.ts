import { create } from "zustand";

type ExperienceUIState = {
	expandedId: string | null;
	toggle: (id: string) => void;
};

export const useExperienceStore = create<ExperienceUIState>((set) => ({
	expandedId: null,
	toggle: (id) =>
		set((state) => ({
			expandedId: state.expandedId === id ? null : id,
		})),
}));
