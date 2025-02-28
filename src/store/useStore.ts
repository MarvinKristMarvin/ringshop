import { create } from "zustand";

interface StoreState {
  isBasketOpen: boolean;
  setIsBasketOpen: (isOpen: boolean) => void;
}

export const useStore = create<StoreState>((set) => ({
  isBasketOpen: false,
  setIsBasketOpen: (isOpen: boolean) => set({ isBasketOpen: isOpen }),
}));
