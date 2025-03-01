import { create } from "zustand";
import { Product } from "@/types";

interface StoreState {
  isBasketOpen: boolean;
  setIsBasketOpen: (isOpen: boolean) => void;
  productsInBasket: Product[];
  setProductsInBasket: (products: Product[]) => void;
}

export const useStore = create<StoreState>((set) => ({
  isBasketOpen: false,
  setIsBasketOpen: (isOpen: boolean) => set({ isBasketOpen: isOpen }),
  productsInBasket: [],
  setProductsInBasket: (products: Product[]) =>
    set({ productsInBasket: products }),
}));
