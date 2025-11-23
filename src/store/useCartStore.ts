import { create } from 'zustand';
import { Product } from '../data/data';

export interface CartItem extends Product {
    quantity: number;
    notes?: string;
}

interface CartState {
    cart: CartItem[];
    addToCart: (product: Product, quantity: number, notes?: string) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, delta: number) => void;
    clearCart: () => void;
    getTotal: () => { subtotal: number; tax: number; total: number };
}

export const useCartStore = create<CartState>((set, get) => ({
    cart: [],
    addToCart: (product, quantity, notes) => set((state) => {
        const existingItem = state.cart.find((item) => item.id === product.id && item.notes === notes);
        if (existingItem) {
            return {
                cart: state.cart.map((item) =>
                    item.id === product.id && item.notes === notes
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                ),
            };
        }
        return { cart: [...state.cart, { ...product, quantity, notes }] };
    }),
    removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter((item) => item.id !== productId),
    })),
    updateQuantity: (productId, delta) => set((state) => ({
        cart: state.cart.map((item) => {
            if (item.id === productId) {
                const newQuantity = item.quantity + delta;
                return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
            }
            return item;
        }),
    })),
    clearCart: () => set({ cart: [] }),
    getTotal: () => {
        const { cart } = get();
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const tax = subtotal * 0.10;
        const total = subtotal + tax;
        return { subtotal, tax, total };
    },
}));
