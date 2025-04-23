import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
  id: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (id: string, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (id: string) => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (id: string, quantity: number = 1) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === id);

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item,
              ),
            };
          }

          return {
            items: [...state.items, { id, quantity }],
          };
        });
      },

      removeItem: (id: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      updateQuantity: (id: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item,
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      getItemQuantity: (id: string) => {
        const item = get().items.find((item) => item.id === id);
        return item ? item.quantity : 0;
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: "cart-storage",
      // Optional: You can add a version number to handle migrations if needed
      // version: 1,
    },
  ),
);
