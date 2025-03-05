import { create } from "zustand";
import { Product } from "@/types";

interface StoreState {
  isBasketOpen: boolean;
  setIsBasketOpen: (isOpen: boolean) => void;
  productsInBasket: Product[];
  setProductsInBasket: (products: Product[]) => void;
  colorFilters: string[];
  setColorFilters: (colors: string[]) => void;
  stoneFilters: string[];
  setStoneFilters: (stones: string[]) => void;
}

export const useStore = create<StoreState>((set) => ({
  isBasketOpen: false,
  setIsBasketOpen: (isOpen: boolean) => set({ isBasketOpen: isOpen }),
  productsInBasket: [],
  setProductsInBasket: (
    products: Product[] | ((prev: Product[]) => Product[])
  ) =>
    set((state) => ({
      productsInBasket:
        typeof products === "function"
          ? products(state.productsInBasket)
          : products,
    })),
  colorFilters: [],
  setColorFilters: (colors: string[]) => set({ colorFilters: colors }),
  stoneFilters: [],
  setStoneFilters: (stones: string[]) => set({ stoneFilters: stones }),
}));
