import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
 addToCart: (state, action) => {
  const newItem = action.payload;
  const itemId = newItem.id; 
  const existingItem = state.items.find(item => item.id === itemId);

  if (existingItem) {
    existingItem.quantity++;
    existingItem.totalPrice += existingItem.price;
  } else {
    state.items.push({
      id: itemId,       
      name: newItem.name,
      price: newItem.price,
      image: newItem.image,
      quantity: 1,
      totalPrice: newItem.price
    });
  }

  state.totalQuantity++;
  state.totalAmount += newItem.price;
},


  removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (!existingItem) return;

      state.totalQuantity -= existingItem.quantity;
      state.totalAmount -= existingItem.totalPrice;

      state.items = state.items.filter(item => item.id !== id);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      if (typeof quantity !== "number" || quantity < 0) return;

      const existingItem = state.items.find(item => item.id === id);
      if (!existingItem) return;

      const oldQty = existingItem.quantity;
      const quantityDiff = quantity - oldQty;

      if (quantity === 0) {
        state.totalQuantity -= oldQty;
        state.totalAmount -= existingItem.totalPrice;
        state.items = state.items.filter(item => item.id !== id);
        return;
      }

      existingItem.quantity = quantity;
      const oldTotalPrice = existingItem.totalPrice || (existingItem.price * oldQty);
      existingItem.totalPrice = existingItem.price * quantity;

      state.totalQuantity += quantityDiff;
      state.totalAmount = state.totalAmount - oldTotalPrice + existingItem.totalPrice;
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
