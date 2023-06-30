import create from "zustand";

export const useMobileStore = create((set) => ({
  isMobile: false,
  updateIsMobile: (value: boolean) => set({ isMobile: value }),
}));
