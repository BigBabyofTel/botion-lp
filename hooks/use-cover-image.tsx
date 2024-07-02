import { create } from "zustand";

type CoverImageStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onReplace: (url: string) => void;
    url?: string;
}

export const useCoverImage = create<CoverImageStore>((set) => ({
    onReplace: (url: string) => set({ isOpen: true, url }),
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))