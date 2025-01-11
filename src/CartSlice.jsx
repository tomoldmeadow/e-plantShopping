import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; // Extract plant details
      const existingItem = state.items.find(item => item.name === name); // Check if plant exists
      if (existingItem) {
        existingItem.quantity++; // Increment quantity if plant exists
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Add new plant
      }
    },
    removeItem: (state, action) => {
        const itemToRemove = action.payload;  // The entire item
        state.items = state.items.filter(item => item.name !== itemToRemove.name); // Remove item by matching name
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Extract name and quantity
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity = quantity; // Update quantity if plant exists
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;


