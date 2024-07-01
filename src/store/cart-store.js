import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),

  removeFromCart: (productId) =>
    set((state) => ({
      // 'state' is include all the state properties and 
      // action function and everything we defined in the callback of create method
      cart: state.cart.filter((productItem) => productItem.id !== productId),
    })),

  clearCart: () => set(() => ({ cart: [] })),
}));
