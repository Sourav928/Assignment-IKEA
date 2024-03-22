export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  payload: item,
});

export const removeFromCart = (item) => ({
  type: "REMOVE_FROM_CART",
  payload: item,
});

export const updateQuantity = (payload) => ({
  type: "UPDATE_QUANTITY",
  payload: payload,
});
